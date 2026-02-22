import { readContract } from "wagmi/actions";
import { base } from "wagmi/chains";
import { GATEKEEPER_ADDRESS } from "@/constants";
import { GATEKEEPER_ABI } from "@/abis/gatekeeperAbi";

export const fetchGlobalDailyLimit = async () =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "globalDailyLimit",
    chain: base,
    authorizationList: [],
  });

export const fetchUserDailyLimit = async (user: `0x${string}`) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "userDailyLimit",
    args: [user],
    chain: base,
    authorizationList: [],
  });

export const fetchRemainingToday = async (user: `0x${string}`) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "remainingToday",
    args: [user],
    chain: base,
    authorizationList: [],
  });

