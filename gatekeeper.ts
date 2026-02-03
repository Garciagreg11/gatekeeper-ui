"use client";

import { useContractRead } from "wagmi";
import { gatekeeperAbi } from "@/lib/gatekeeperAbi";
import { GATEKEEPER_ADDRESS } from "@/config";

export function useGatekeeper() {
  const globalLimit = useReadContract({
    address: GATEKEEPER_ADDRESS,
    abi: gatekeeperAbi,
    functionName: "globalLimit",
  });

  const userDailyLimit = (address: string) =>
    useReadContract({
      address: GATEKEEPER_ADDRESS,
      abi: gatekeeperAbi,
      functionName: "userDailyLimit",
      args: [address],
    });

  return {
    globalLimit,
    userDailyLimit,
  };
}
