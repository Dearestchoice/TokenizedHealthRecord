// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthRecords {
    struct HealthRecord {
        bytes32 recordHash; // Encrypted health data hash
        address owner;
        uint256 createdAt;
    }

    struct AccessToken {
        address provider;
        uint256 expiry;
        bool isValid;
    }

    mapping(uint256 => HealthRecord) private records;
    mapping(uint256 => mapping(address => AccessToken)) private accessTokens;
    mapping(address => uint256[]) private patientRecords;

    event RecordAdded(uint256 recordId, address indexed owner);
    event AccessGranted(uint256 recordId, address indexed provider, uint256 expiry);
    event AccessRevoked(uint256 recordId, address indexed provider);

    uint256 private recordCounter;

    modifier onlyOwner(uint256 _recordId) {
        require(records[_recordId].owner == msg.sender, "Not authorized");
        _;
    }

    modifier onlyAuthorized(uint256 _recordId) {
        AccessToken memory token = accessTokens[_recordId][msg.sender];
        require(token.isValid && token.expiry > block.timestamp, "Access denied or expired");
        _;
    }

    // Patient adds a new health record (encrypted)
    function addHealthRecord(bytes32 _recordHash) external returns (uint256) {
        recordCounter++;
        records[recordCounter] = HealthRecord(_recordHash, msg.sender, block.timestamp);
        patientRecords[msg.sender].push(recordCounter);
        emit RecordAdded(recordCounter, msg.sender);
        return recordCounter;
    }

    // Patient grants access to a healthcare provider for a limited time
    function grantAccess(uint256 _recordId, address _provider, uint256 _duration) external onlyOwner(_recordId) {
        uint256 expiryTime = block.timestamp + _duration;
        accessTokens[_recordId][_provider] = AccessToken(_provider, expiryTime, true);
        emit AccessGranted(_recordId, _provider, expiryTime);
    }

    // Patient revokes access from a healthcare provider
    function revokeAccess(uint256 _recordId, address _provider) external onlyOwner(_recordId) {
        accessTokens[_recordId][_provider].isValid = false;
        emit AccessRevoked(_recordId, _provider);
    }

    // Healthcare provider retrieves the health record if they have valid access
    function retrieveHealthRecord(uint256 _recordId) external view onlyAuthorized(_recordId) returns (bytes32) {
        return records[_recordId].recordHash;
    }

    // Get patient's own records
    function getPatientRecords(address _patient) external view returns (uint256[] memory) {
        return patientRecords[_patient];
    }

    // Check if access to a specific record is active for a provider
    function checkAccess(uint256 _recordId, address _provider) external view returns (bool) {
        AccessToken memory token = accessTokens[_recordId][_provider];
        return token.isValid && token.expiry > block.timestamp;
    }
}
