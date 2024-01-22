// const fs = require('fs/promises');
// const fsCallback = require('fs');
const path = require('path');
const activity = require('../workoutModels.js')
// const options = {
//     speed: 'run fast',
//     mid: 'run medium',
//     distance: 'run slow',
  
//   };
  //conditional rendering--- if they 

const distanceController = {}

  // add a method called 'getColor'



  distanceController.saveDistance = async(req, res, next) => {

    console.log("request body", req.body)
    
        console.log(req.body[0])
        console.log(req.body[1])
        console.log(req.body[2]) 

        // const index0 =
        // const index1 =
        // const index2 =
  
        try {
          await activity.create({
            Date: req.body[0].toString(),
           Description: req.body[1].toString(),
            Times: req.body[2].toString()
          })

          res.locals.activitySave = "posted successfully!"

          return next()
        }

        catch(err) { console.log(err)
        return next(err)
        };
 
  };
  

  


// Export the controller object

module.exports = distanceController;