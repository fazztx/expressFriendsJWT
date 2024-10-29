const express = require('express');

const router = express.Router();

let friends = {
  "johnsmith@gamil.com": { "firstName": "John", "lastName": "Doe", "DOB": "22-12-1990" },
  "annasmith@gamil.com": { "firstName": "Anna", "lastName": "smith", "DOB": "02-07-1983" },
  "peterjones@gamil.com": { "firstName": "Peter", "lastName": "Jones", "DOB": "21-03-1989" }
};


// GET request: Retrieve all friends
router.get("/", (req, res) => {
  // Update the code here
  res.send(JSON.stringify(friends));
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  res.send(friends[email]);
});


// POST request: Add a new friend
router.post("/", (req, res) => {
  // Update the code here
  // Check if email is provided in the request body
    if (req.body.email) {
        // Create or update friend's details based on provided email
        friends[req.body.email] = {
            "firstName": req.body.firstName,
            "lastName" : req.body.lastName,
            "DOB" : req.body.DOB,
          };
    }
    // Send response indicating user addition
    res.send("The user" + (' ') + (req.body.firstName) + " Has been added!");
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  if (friends[req.body.email]){
    if(req.body.firstName){
      friends[req.body.email].firstName = req.body.firstName;
    }
    if(req.body.lastName){
      friends[req.body.email].lastName = req.body.lastName;
    }
    if(req.body.DOB){
      friends[req.body.email].DOB = req.body.DOB;
    }
    res.send("Updated: " + friends[req.body.email]);
  } else{
    res.send("Unable to find friend");
  }

});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Extract email parameter from request URL

  if (req.params.email) {
      // Delete friend from 'friends' object based on provided email
      delete friends[email];
  }
  
  // Send response confirming deletion of friend
  res.send(`Friend with the email ${email} deleted.`);
});

module.exports = router;
