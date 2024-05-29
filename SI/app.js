const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Welcome! Use the /interest endpoint to calculate interest. Example: /interest?principal=1000&rate=5&time=2"
  );
});
// Route to interest

app.get("/interest", (req, res) => {
  // Get the query parameters 'a' and 'b'
  const principal = parseFloat(req.query.principal);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);

  // Check if 'a' and 'b' are valid numbers
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    return res.status(400).json({ error: "Invalid numbers provided" });
  }

  // Calculate the interest
  const interest = (principal * rate * time) / 100;

  // Respond with the sum
  res.json({ Interest: interest });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
