'use client';

import { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { GATEKEEPER_ABI } from '@/lib/abi/gatekeeper';
import { GATEKEEPER_ADDRESS } from '@/lib/contracts';

export default function SponsorGasForm() {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');

  const { writeContract, isPending } = useWriteContract();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    writeContract({
      address: GATEKEEPER_ADDRESS as `0x${string}`,
      abi: GATEKEEPER_ABI,
      functionName: 'sponsorGas',
      args: [user as `0x${string}`, BigInt(amount)],
      value: BigInt(amount),
    });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        type="text"
        placeholder="User address"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
      />

      <input
        type="text"
        placeholder="Amount (wei)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
      />

      <button
        type="submit"
        disabled={isPending}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        {isPending ? 'Sending…' : 'Sponsor Gas'}
      </button>
    </form>
  );
}

