const express = require("express");
const { route } = require("./userRoutes");
const router = express.Router();

//to get the list of food items availavle
router.get('/foodData', (req, res) => {
      try {

         // console.log(global.food_items)
          res.send([global.food_items, global.food_categories])
          
      } catch (error) {
          console.error(error.message)
          res.status(500).json({error:"internal server error is fetching the data"})
      }
})

module.exports = router;