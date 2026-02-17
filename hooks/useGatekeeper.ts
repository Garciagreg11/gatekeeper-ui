import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { readContract, writeContract, waitForTransactionReceipt } from '@wagmi/core';
import { config } from '@/lib/wagmi';
import { GATEKEEPER_ADDRESS, GatekeeperAbi } from '@/lib/constants';


// -----------------------------
// READ HELPERS
// -----------------------------

const fetchGlobalDailyLimit = async () =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    Abi: GatekeeperAbi,
    functionName: 'globalDailyLimit',
  });

const fetchUserDailyLimit = async (user: string) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    Abi: GatekeeperAbi,
    functionName: 'userDailyLimit',
    args: [user],
  });

const fetchRemainingToday = async (user: string) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    Abi: GatekeeperAbi,
    functionName: 'remainingToday',
    args: [user],
  });

// -----------------------------
// WRITE HELPERS
// -----------------------------

const writeSetGlobalDailyLimit = async (newLimit: bigint) => {
  const hash = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    Abi: GatekeeperAbi,
    functionName: 'setGlobalDailyLimit',
    args: [newLimit],
  });
  return waitForTransactionReceipt(config, { hash });
};

const writeSetUserDailyLimit = async (user: string, newLimit: bigint) => {
  const hash = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    Abi: GatekeeperAbi,
    functionName: 'setUserDailyLimit',
    args: [user, newLimit],
  });
  return waitForTransactionReceipt(config, { hash });
};

const writeSponsorGas = async (user: string, amount: bigint) => {
  const hash = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    Abi: GatekeeperAbi,
    functionName: 'sponsorGas',
    args: [user, amount],
  });
  return waitForTransactionReceipt(config, { hash });
};

// -----------------------------
// MAIN HOOK EXPORT
// -----------------------------

export function useGatekeeper() {
  const qc = useQueryClient();

  // READ HOOKS
  const globalDailyLimit = useQuery({
    queryKey: ['globalDailyLimit'],
    queryFn: fetchGlobalDailyLimit,
  });

  const userDailyLimit = (user: string) =>
    useQuery({
      queryKey: ['userDailyLimit', user],
      queryFn: () => fetchUserDailyLimit(user),
      enabled: Boolean(user),
    });

  const remainingToday = (user: string) =>
    useQuery({
      queryKey: ['remainingToday', user],
      queryFn: () => fetchRemainingToday(user),
      enabled: Boolean(user),
    });

  // WRITE HOOKS
  const setGlobalDailyLimit = useMutation({
    mutationFn: writeSetGlobalDailyLimit,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['globalDailyLimit'] });
    },
  });

  const setUserDailyLimit = useMutation({
    mutationFn: ({ user, newLimit }: { user: string; newLimit: bigint }) =>
      writeSetUserDailyLimit(user, newLimit),
    onSuccess: (_, { user }) => {
      qc.invalidateQueries({ queryKey: ['userDailyLimit', user] });
      qc.invalidateQueries({ queryKey: ['remainingToday', user] });
    },
  });

  const sponsorGas = useMutation({
    mutationFn: ({ user, amount }: { user: string; amount: bigint }) =>
      writeSponsorGas(user, amount),
    onSuccess: (_, { user }) => {
      qc.invalidateQueries({ queryKey: ['remainingToday', user] });
    },
  });

  return {
    // Reads
    globalDailyLimit,
    userDailyLimit,
    remainingToday,

    // Writes
    setGlobalDailyLimit,
    setUserDailyLimit,
    sponsorGas,
  };
}

