import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  paths: {
    artifacts: "./src",
  },
  networks: {
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      accounts: process.env.ACCOUNT_PRIVATE_KEY
        ? [process.env.ACCOUNT_PRIVATE_KEY]
        : [],
    },
  },
};

export default config;
