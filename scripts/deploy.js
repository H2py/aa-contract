// scripts/deploy.js  (ESM)
import hre from "hardhat";

async function main() {
  const connection = await hre.network.connect();
  const { ethers } = connection;
  const signers = await ethers.getSigners();
  const accounts = signers.map((signer) => signer.address);
  console.log(accounts);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
