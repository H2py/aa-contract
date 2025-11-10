import hre from "hardhat";

async function main() {
    const connection = await hre.network.connection();
    const {ethers} = connection;
    const signer = await ethers.getSigner()
    const accounts = signer.map((signer) => signer.accounts);
    console.log(accounts);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
