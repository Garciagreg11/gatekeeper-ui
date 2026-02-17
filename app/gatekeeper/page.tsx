"use client";

import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";

import { config } from "@/lib/wagmi";
import { GATEKEEPER_ADDRESS } from "@/lib/constants";
import { GATEKEEPER_ABI } from "@/lib/gatekeeperAbi";

export default function GatekeeperPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userDailyLimit"],
    queryFn: async () => {
      return await readContract(config, {
        address: GATEKEEPER_ADDRESS,
        abi: GATEKEEPER_ABI,
        functionName: "userDailyLimit",
        args: ["0x0000000000000000000000000000000000000000"],
        chainId: 8453,
        authorizationList: [], // REQUIRED for wagmi v2+
      });
    },
  });

  if (isLoading) return <div>Loading…</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Gatekeeper Dashboard</h1>
      <p>User Daily Limit: {String(data)}</p>
    </div>
  );
}

