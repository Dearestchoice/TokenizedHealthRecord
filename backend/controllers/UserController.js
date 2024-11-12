const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const Email = require("../utils/sendMail");
const generateRandomPassword = require("../utils/randomPassword")
const  { User } = require("../db");

const signup = async (req, res) => {
    let { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ status: "error", message: "email and password are required" })
    }

    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ status: "error", message: "This email has been used by another user"})
        }

        // Hash password
        const salt = await bcrypt.genSalt(11);
        password = await bcrypt.hash(password, salt);

        const newUser = new User({ email, password });
        await newUser.save();
        newUser.password = "";

        const content = `<p>Hello</p><br><br><br><p>Thank you for registering on TokenizedHealthRecords</p>`;
        await Email(newUser.email, "TokenizedHealthRecords Email Verification", content);
        return res.status(201).json({ status: "success", message: "Registration successful", newUser })

    } catch(err) {
        console.log(err);
        return res.status(500).json({ status: "error", message: `Error occured during registration: ${err.message}`});
    }
};


const signin = async (req, res) => {
    const { password, email } = req.body;

    if (!password || !email) {
        return res.status(400).json({ status: 'error', message: 'email and password are required for login' });
        
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: "error", message: "Account not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ status: 'error', message: 'Incorrect password' });
        }
        user.password = "";

         // In the real-world application (in production) secret keys are saved in environment variables
         const token = jsonwebtoken.sign({ id: user._id }, "TokenizedHealthRecordsKey", { expiresIn: '48h' }); // generates a jsonwebtoken
         res.setHeader('Access-Control-Expose-Headers', 'Authorization');
         res.status(200).header('Authorization', `Bearer ${token}`).json({ status: 'success', user });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "error", message: "Error occured while logging in"});
    }
};


const forgotPassword = async (req, res) => {
    const email = req.body.email;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: "error", message: "Account not found"})
        }

        let newPassword = await generateRandomPassword(8, true);

        const content = `<p>Hello</p> <br> <p>Your new password is ${newPassword}</p>`
        const salt = await bcrypt.genSalt(11);
        newPassword = await bcrypt.hash(newPassword, salt);

        await Email(user.email, "TokenizedHealthRecords New Password", content);
        await User.findByIdAndUpdate(user._id, { password: newPassword });
        return res.status(200).json({ status: "success", message: "A new random password has been sent to your email"})
    } catch(err) {
        console.log(err)
        return res.status(500).json({ status: "error", message: "Internal server error: unable to generate a new password"});
    }
}


module.exports = { signup, signin, forgotPassword };