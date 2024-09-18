"use client";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="w-full flex bg-black/[80%] justify-center items-center">
        <div className="w-10/12 flex py-5 justify-between items-center">
          <WalletMultiButton />
          <WalletDisconnectButton />
        </div>
      </div>
    </nav>
  );
}
