import { useQuery } from '@tanstack/react-query';
import { readContract } from '@wagmi/core';
import { config } from '@/wagmi'; // <-- THIS is the missing piece
import { GATEKEEPER_ADDRESS, gatekeeperAbi } from '@/constants';

const fetchUserDailyLimit = async (user: string) =>
  readContract(config, {
    address: GATEKEEPER_ADDRESS,
    abi: gatekeeperAbi,
    functionName: 'userDailyLimit',
    args: [user],
  });

export function useGatekeeper() {
  const userDailyLimit = (user: string) =>
    useQuery({
      queryKey: ['userDailyLimit', user],
      queryFn: () => fetchUserDailyLimit(user),
      enabled: Boolean(user), // prevents empty calls
    });

  return { userDailyLimit };
}

