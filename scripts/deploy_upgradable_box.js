import { ethers, upgrades } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  await box.waitForDeployment();
  console.log("Box deployed to:", await box.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
