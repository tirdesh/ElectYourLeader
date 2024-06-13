// backend/utils/ethers.ts
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // Update with your Ethereum RPC URL

export { provider };
