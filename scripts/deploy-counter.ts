import { ethers } from "hardhat";

async function main() {
  const CounterContractFactory = await ethers.getContractFactory("Counter");
  const counterContract = await CounterContractFactory.deploy();

  await counterContract.deployed();

  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${counterContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
