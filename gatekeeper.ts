"use client";

import { useReadContract } from "wagmi";
import { GATEKEEPER_ABI } from "@/lib/gatekeeperAbi";
import { GATEKEEPER_ADDRESS } from "@/config";

export function useGatekeeper() {
  const globalLimit = useReadContract({
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "globalLimit",
  });

  return {
    globalLimit,
  };
}

