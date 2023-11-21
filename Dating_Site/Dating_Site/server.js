const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Import the cors package

// Enable CORS for all routes // allows other domains to the server
app.use(cors());
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to handle incoming POST requests from the client
app.post("/add", (req, res) => {
  const receivedData = req.body;

  // Process the received data as needed (e.g., append it to a JSON file)
  console.log("Data received from the client:", receivedData);

  // Append the received data to a local JSON file
  const filePath = "data.json";

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return res.status(500).json({ message: "Error reading JSON file" });
    }

    let existingData = JSON.parse(data);

    // Append the received data to the existing JSON data
    existingData.push(receivedData);

    // Write the updated JSON data back to the file
    fs.writeFile(filePath, JSON.stringify(existingData), "utf8", (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
        return res.status(500).json({ message: "Error writing JSON file" });
      }

      console.log("Data appended to JSON file successfully");
      res.json({ message: "Data received and appended successfully" });
    });
  });
});

// Start the server on a port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
