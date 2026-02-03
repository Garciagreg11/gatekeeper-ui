"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [globalLimit, setGlobalLimit] = useState<number | null>(null);
  const [userLimit, setUserLimit] = useState<number | null>(null);
  const [remainingToday, setRemainingToday] = useState<number | null>(null);

  const [newGlobalLimit, setNewGlobalLimit] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [newUserLimit, setNewUserLimit] = useState("");

  // Fetch global limit
  useEffect(() => {
    fetch("/api/global-limit")
      .then((res) => res.json())
      .then((data) => setGlobalLimit(data.limit))
      .catch(() => setGlobalLimit(null));
  }, []);

  // Fetch user limit + remaining
  useEffect(() => {
    if (!userAddress) return;

    fetch(`/api/user-limit?address=${userAddress}`)
      .then((res) => res.json())
      .then((data) => {
        setUserLimit(data.limit);
        setRemainingToday(data.remaining);
      })
      .catch(() => {
        setUserLimit(null);
        setRemainingToday(null);
      });
  }, [userAddress]);

  // Update global limit
  const updateGlobal = async () => {
    await fetch("/api/update-global-limit", {
      method: "POST",
      body: JSON.stringify({ limit: Number(newGlobalLimit) }),
    });
  };

  // Update user limit
  const updateUser = async () => {
    await fetch("/api/update-user-limit", {
      method: "POST",
      body: JSON.stringify({
        address: userAddress,
        limit: Number(newUserLimit),
      }),
    });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Operator Dashboard
      </h1>

      {/* Global Limit */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Global Daily Limit</h2>
        <p>
          Current:{" "}
          {globalLimit === null ? "Loading…" : `${globalLimit.toString()}`}
        </p>

        <input
          placeholder="New global limit"
          value={newGlobalLimit}
          onChange={(e) => setNewGlobalLimit(e.target.value)}
        />
        <button onClick={updateGlobal}>Update Global Limit</button>
      </section>

      {/* User Limit */}
      <section>
        <h2>User Daily Limit</h2>

        <input
          placeholder="User address"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />

        <p>
          Current:{" "}
          {userLimit === null ? "Loading…" : `${userLimit.toString()}`}
        </p>

        <input
          placeholder="New user limit"
          value={newUserLimit}
          onChange={(e) => setNewUserLimit(e.target.value)}
        />
        <button onClick={updateUser}>Update User Limit</button>

        <p>
          Remaining Today:{" "}
          {remainingToday === null
            ? "Loading…"
            : `${remainingToday.toString()}`}
        </p>
      </section>
    </div>
  );
}

