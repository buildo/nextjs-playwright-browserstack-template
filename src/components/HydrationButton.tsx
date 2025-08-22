"use client";
import { useState, useEffect } from "react";

export default function HydrationButton() {
  const [hydrated, setHydrated] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={() => setClicked(true)}>CLICK ME</button>
      {clicked && <p>You clicked me :D</p>}
    </div>
  );
}
