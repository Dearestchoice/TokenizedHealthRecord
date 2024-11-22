const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const signer = new ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, provider);

const CONTRACT_ABI = [
    // Insert the ABI array here
    {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "recordId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          }
        ],
        "name": "AccessGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "recordId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          }
        ],
        "name": "AccessRevoked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "recordId",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "RecordAdded",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_recordHash",
            "type": "bytes32"
          }
        ],
        "name": "addHealthRecord",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_recordId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_provider",
            "type": "address"
          }
        ],
        "name": "checkAccess",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_patient",
            "type": "address"
          }
        ],
        "name": "getPatientRecords",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_recordId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_provider",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_duration",
            "type": "uint256"
          }
        ],
        "name": "grantAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_recordId",
            "type": "uint256"
          }
        ],
        "name": "retrieveHealthRecord",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_recordId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_provider",
            "type": "address"
          }
        ],
        "name": "revokeAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
];

const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
);

module.exports = contract;
