# Simple `eth_getProof` Proof of Concept

This project demonstrates the use of the `eth_getProof` functionality, which is not supported on the Hardhat local network. Instead, the Sepolia test network is used as the default network for testing.

## Overview

- **Default EVM Version**: Paris
- **Deployed Contract Address on Sepolia**: [0x95B3106Ac2D82c003fd876E550571F2d9fE5FF16](https://sepolia.etherscan.io/address/0x95B3106Ac2D82c003fd876E550571F2d9fE5FF16)
  
## Recommended Tool

It is highly recommended to use the following storage service for enhanced functionality:  
[https://storage.herodotus.dev/](https://storage.herodotus.dev/)

## Commands

Below are some essential commands you can use to interact with the project:

```bash
# Display help for Hardhat commands
npx hardhat help

# Run tests
npx hardhat test

# Run tests and report gas usage
REPORT_GAS=true npx hardhat test

# Start a local Hardhat node
npx hardhat node

# Deploy the TokenBridge module
npx hardhat ignition deploy ./ignition/modules/TokenBridge.ts

# Run the storage layout script
npx hardhat run scripts/viewStorageLayout.ts

# Execute the deposit script with the deployed contract address
address=0x95B3106Ac2D82c003fd876E550571F2d9fE5FF16 npx hardhat run scripts/deposit.ts
```