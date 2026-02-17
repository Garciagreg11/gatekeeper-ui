"use client";

import { useState } from "react";
import { 
  useAccount, 
  useWriteContract, 
  useChainId 
} from "wagmi";
import { GATEKEEPER_ABI } from "@/lib/abi/gatekeeper";
import { GATEKEEPER_ADDRESS } from "@/lib/contracts";

export default function SponsorGasForm() {
  const [user, setUser] = useState<`0x${string}`>("0x");
  const [amount, setAmount] = useState<string>("");

  const { address: account } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync, isPending } = useWriteContract();

  const handleSponsor = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!account) {
      console.error("Wallet not connected");
      return;
    }

    await writeContractAsync({
      address: GATEKEEPER_ADDRESS as `0x${string}`,
      abi: GATEKEEPER_ABI,
      functionName: "sponsorGas",
      args: [user, BigInt(amount)],
      value: BigInt(amount),
      account,
      chain: chainId, // REQUIRED in wagmi v3
    });
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Sponsor Gas</h2>

      <input
        type="text"
        placeholder="User wallet address"
        className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
        value={user}
        onChange={(e) => setUser(e.target.value as `0x${string}`)}
      />

      <input
        type="number"
        placeholder="Amount (wei)"
        className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleSponsor}
        disabled={isPending}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        {isPending ? "Sending..." : "Sponsor Gas"}
      </button>
    </div>
  );
}

