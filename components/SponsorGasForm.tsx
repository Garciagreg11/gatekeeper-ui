"use client";

import { useState } from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import {
  GATEKEEPER_ABI,
  GATEKEEPER_ADDRESS,
} from "@/lib/abi/gatekeeper";

export default function SponsorGasForm() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const {
    data: hash,
    writeContract,
    error,
    isPending,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess,
  } = useWaitForTransactionReceipt({
    hash,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    writeContract({
      address: GATEKEEPER_ADDRESS,
      abi: GATEKEEPER_ABI,
      functionName: "sponsorGas",
      args: [address],
      value: parseEther(amount),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
        placeholder="User address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Sponsor Gas"}
      </button>

      {hash && <p className="text-green-400 break-all">Tx: {hash}</p>}
      {isConfirming && <p className="text-yellow-400">Confirming...</p>}
      {isSuccess && <p className="text-green-500">Success!</p>}
      {error && <p className="text-red-500">{error.message}</p>}
    </form>
  );
}

