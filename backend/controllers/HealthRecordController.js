const contract = require("../config/contract");

// Add a health record
const addHealthRecord = async (req, res) => {
    const { recordHash } = req.body;

    try {
        const tx = await contract.addHealthRecord(recordHash);
        await tx.wait();
        res.status(200).json({ message: "Health record added successfully", transactionHash: tx.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Grant access to a provider
const grantAccess = async (req, res) => {
    const { recordId, provider, duration } = req.body;

    try {
        const tx = await contract.grantAccess(recordId, provider, duration);
        await tx.wait();
        res.status(200).json({ message: "Access granted successfully", transactionHash: tx.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Revoke access from a provider
const revokeAccess = async (req, res) => {
    const { recordId, provider } = req.body;

    try {
        const tx = await contract.revokeAccess(recordId, provider);
        await tx.wait();
        res.status(200).json({ message: "Access revoked successfully", transactionHash: tx.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a health record
const retrieveHealthRecord = async (req, res) => {
    const { recordId } = req.params;

    try {
        const recordHash = await contract.retrieveHealthRecord(recordId);
        res.status(200).json({ recordHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get patient's health records
const getPatientRecords = async (req, res) => {
    const { patientAddress } = req.params;

    try {
        const records = await contract.getPatientRecords(patientAddress);
        res.status(200).json({ records });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Check if access is active
const checkAccess = async (req, res) => {
    const { recordId, provider } = req.body;

    try {
        const isAccessActive = await contract.checkAccess(recordId, provider);
        res.status(200).json({ isAccessActive });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addHealthRecord,
    grantAccess,
    revokeAccess,
    retrieveHealthRecord,
    getPatientRecords,
    checkAccess,
};
