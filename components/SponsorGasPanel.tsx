"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { base } from "wagmi/chains";
import { GATEKEEPER_ABI } from "@/abis/gatekeeperAbi";
import { GATEKEEPER_ADDRESS } from "@/constants";

export default function SponsorGasPanel() {
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");

  const { address: account } = useAccount();
  const { writeContract, isPending } = useWriteContract();

  const handleSponsor = () => {
    if (!user || !amount || !account) return;

    writeContract({
      address: GATEKEEPER_ADDRESS,
      abi: GATEKEEPER_ABI,
      functionName: "sponsorGas",
      args: [user as `0x${string}`, BigInt(amount)],
      chain: base,
      account,
    });
  };

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h2 className="text-lg font-semibold">Sponsor Gas</h2>

      <input
        type="text"
        placeholder="User address (0x...)"
        className="w-full p-2 border rounded"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleSponsor}
        disabled={isPending}
        className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Sponsor Gas"}
      </button>
    </div>
  );
}

