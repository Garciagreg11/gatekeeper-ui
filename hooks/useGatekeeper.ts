import { readContract, writeContract, waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/lib/wagmi";
import { GATEKEEPER_ADDRESS } from "@/lib/constants";
import { GATEKEEPER_ABI } from "@/abis/gatekeeperAbi";

// -----------------------------
// READ HELPERS
// -----------------------------

export const fetchGlobalDailyLimit = async () =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "globalDailyLimit",
  });

export const fetchUserDailyLimit = async (user: string) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "userDailyLimit",
    args: [user],
  });

export const fetchRemainingToday = async (user: string) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "remainingToday",
    args: [user],
  });

// -----------------------------
// WRITE HELPERS
// -----------------------------

export const setGlobalDailyLimit = async (newLimit: bigint) => {
  const tx = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "setGlobalDailyLimit",
    args: [newLimit],
  });

  return waitForTransactionReceipt(config, { hash: tx });
};

export const setUserDailyLimit = async (user: string, newLimit: bigint) => {
  const tx = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "setUserDailyLimit",
    args: [user, newLimit],
  });

  return waitForTransactionReceipt(config, { hash: tx });
};

export const addOperator = async (operator: string) => {
  const tx = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "addOperator",
    args: [operator],
  });

  return waitForTransactionReceipt(config, { hash: tx });
};

export const removeOperator = async (operator: string) => {
  const tx = await writeContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "removeOperator",
    args: [operator],
  });

  return waitForTransactionReceipt(config, { hash: tx });
};

