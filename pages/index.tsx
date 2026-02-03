import { useGatekeeper } from "@/hooks/useGatekeeper";
import { useWriteContract } from "wagmi";
import { useState } from "react";

export default function OperatorPanel() {
  const { 
    globalDailyLimit, 
    userDailyLimit, 
    remainingToday, 
    setGlobalDailyLimit, 
    setUserDailyLimit 
  } = useGatekeeper();

  const { writeContract } = useWriteContract();

  const [newGlobalLimit, setNewGlobalLimit] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [newUserLimit, setNewUserLimit] = useState("");

  const userLimit = userAddress ? userDailyLimit(userAddress) : null;
  const remaining = userAddress ? remainingToday(userAddress) : null;

  return (
    <div>
      <h2>Gatekeeper Operator Panel</h2>

      <div>
        <h3>Global Daily Limit</h3>
        <p>
          Current:{" "}
          {globalDailyLimit.data !== undefined
            ? globalDailyLimit.data.toString()
            : "Loading..."}
        </p>

        <input
          value={newGlobalLimit}
          onChange={(e) => setNewGlobalLimit(e.target.value)}
          placeholder="New global limit"
        />

        <button
          onClick={() =>
            setGlobalDailyLimit(writeContract, BigInt(newGlobalLimit))
          }
        >
          Update Global Limit
        </button>
      </div>

      <div>
        <h3>User Daily Limit</h3>

        <input
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          placeholder="User address"
        />

        <p>
          Current:{" "}
          {userLimit?.data !== undefined
            ? userLimit.data.toString()
            : userAddress
            ? "Loading..."
            : ""}
        </p>

        <input
          value={newUserLimit}
          onChange={(e) => setNewUserLimit(e.target.value)}
          placeholder="New user limit"
        />

        <button
          onClick={() =>
            setUserDailyLimit(writeContract, userAddress, BigInt(newUserLimit))
          }
        >
          Update User Limit
        </button>
      </div>

      <div>
        <h3>Remaining Today</h3>
        {remaining?.data && (
          <pre>{JSON.stringify(remaining.data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

