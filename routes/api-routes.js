const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
})

router.post("/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
})

router.put('/workouts/:id', (req, res) => {
    console.log(req.body);
    db.Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body
        }
    }).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(({ message }) => {
            console.log(message);
        });
});


router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

module.exports = router;