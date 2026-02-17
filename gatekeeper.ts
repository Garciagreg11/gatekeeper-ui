"use client";

import { useReadContract } from "wagmi";
import { gatekeeperAbi } from "@/lib/gatekeeperAbi";
import { GATEKEEPER_ADDRESS } from "@/config";

export function useGatekeeper() {
  const globalLimit = useReadContract({
    address: GATEKEEPER_ADDRESS,
    abi: gatekeeperAbi,
    functionName: "globalLimit",
  });

  return {
    globalLimit,
  };
}

