import { ethers } from "hardhat";
import { abi } from "../artifacts/contracts/TokenBridge.sol/TokenBridge.json";

async function main() {
    const [deployer, user] = await ethers.getSigners();

    const address = "CONTRACT_ADDR";
    if (!ethers.isAddress(address)) {
        throw new Error("Invalid contract address.");
    }

    const contract = new ethers.Contract(address, abi, user);
    const amountToLock = ethers.parseEther("1.0");

    try {
        const lockTx = await contract.lockTokens({ value: amountToLock });
        await lockTx.wait();
        console.log(`Locked ${ethers.formatEther(amountToLock)} Ether in the contract.`);
    } catch (error) {
        console.error("Failed to lock tokens:", error);
        throw error;
    }

    const userAddress = user.address.toLowerCase();
    const abicoder = ethers.AbiCoder.defaultAbiCoder();
    const userSlot = ethers.keccak256(abicoder.encode(["address"], [userAddress]));
    const storageSlot = ethers.zeroPadValue(userSlot, 32);

    try {
        const proof = await ethers.provider.send("eth_getProof", [
            contract.address,
            [storageSlot],
            "latest"
        ]);
        console.log("Storage Proof:", proof);
    } catch (error) {
        console.error("Failed to retrieve storage proof:", error);
        throw error;
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error in script execution:", error);
        process.exit(1);
    });
