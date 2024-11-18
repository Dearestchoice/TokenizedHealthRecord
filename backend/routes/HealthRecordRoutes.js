const express = require("express");
const {
    addHealthRecord,
    grantAccess,
    revokeAccess,
    retrieveHealthRecord,
    getPatientRecords,
    checkAccess,
} = require("../controllers/HealthRecordController");

const router = express.Router();

router.post("/add", addHealthRecord);
router.post("/grant-access", grantAccess);
router.post("/revoke-access", revokeAccess);
router.get("/retrieve/:recordId", retrieveHealthRecord);
router.get("/patient-records/:patientAddress", getPatientRecords);
router.post("/check-access", checkAccess);

module.exports = router;
