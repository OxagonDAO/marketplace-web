import { HardhatUserConfig } from "hardhat/config";

// This adds support for typescript paths mappings
import "tsconfig-paths/register";

const PROJECT_ID = process.env.NODE_SERVICE_ID
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${PROJECT_ID}`,
      accounts: typeof PRIVATE_KEY === "string" ? [PRIVATE_KEY] : undefined
    }
  }
};

export default config;