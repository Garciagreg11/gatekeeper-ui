import { useQuery } from '@tanstack/react-query';
import { readContract } from '@wagmi/core';
import { config } from '@/lib/wagmi';
import { GATEKEEPER_ADDRESS } from '@/lib/constants';
import { GATEKEEPER_ABI } from '@/lib/gatekeeperAbi';

const fetchUserDailyLimit = async (user: string) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: 'userDailyLimit',
    args: [user],
    authorizationList: [],
  });

export function useGatekeeper() {
  const userDailyLimit = (user: string) =>
    useQuery({
      queryKey: ['userDailyLimit', user],
      queryFn: () => fetchUserDailyLimit(user),
      enabled: Boolean(user),
    });

  return { userDailyLimit };
}

