const { ethers } = require("hardhat");

async function main() {
    const HealthRecords = await ethers.getContractFactory("HealthRecords");
    console.log("Deploying HealthRecords contract...");
    
    const healthRecords = await HealthRecords.deploy();
    await healthRecords.deployed();
    
    console.log("HealthRecords deployed to:", healthRecords.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
