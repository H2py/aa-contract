import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import { defineConfig } from "hardhat/config";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY ?? "";
const MNEMONIC = process.env.MNEMONIC ?? "";

export default defineConfig({
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY
        ? `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
        : undefined,
      accounts: MNEMONIC ? { mnemonic: MNEMONIC } : undefined,
    },
  },
});
