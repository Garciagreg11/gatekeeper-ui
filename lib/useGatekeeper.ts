import { useReadContract } from "wagmi";
import { GATEKEEPER_ABI } from "@/lib/gatekeeperAbi";
import { GATEKEEPER_ADDRESS } from "@/lib/contracts";

export function useGatekeeper(user?: `0x${string}`) {
  const sponsoredGas = useReadContract({
    address: GATEKEEPER_ADDRESS,
    abi: GATEKEEPER_ABI,
    functionName: "getSponsoredGas",
    args: user ? [user] : undefined,
    query: {
      enabled: Boolean(user),
    },
  });

  return {
    sponsoredGas,
  };
}
