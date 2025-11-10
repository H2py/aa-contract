import { expect } from "chai";
import hre from "hardhat";

describe("Box", function () {
  let connection;
  let ethers;
  let Box;

  before(async function () {
    connection = await hre.network.connect();
    ethers = connection.ethers;
    Box = await ethers.getContractFactory("Box");
  });

  let box;
  beforeEach(async function () {
    box = await Box.deploy();
    await box.waitForDeployment();
  });

  after(async function () {
    if (connection !== undefined) {
      await connection.close();
    }
  });

  it("retrieve returns a value previously stored", async function () {
    await (await box.store(42)).wait();
    expect(await box.retrieve()).to.equal(42n);
  });
});
