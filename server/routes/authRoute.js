const express = require('express');
const router = express.Router();
const User = require('../models/student')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Send role to frontend
        return res.status(200).json({
            success: true,
            role: user.role,
            name: user.name,
        });

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
