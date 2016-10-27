//@Author  mahmoud elkhouly
//restful API

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')



// find all tasks 
router.get('/tasks', function (req, res, next) {
    db.collection('tasks').find(function (err, tasks) {
        if (err) {
            res.send(err)
        }
        res.send(tasks)
    });

});
//find one task using ID
router.get('/task/:id', function (req, res, next) {
    db.collection('tasks').findOne({ "_id": mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err)
        }
        res.json(task)
    });

});

//save task using post request
router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.title || !(task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "check data again"
        });
    }
    else {
        db.collection("tasks").save(task, function (err, task) {
            if (err) {
                res.send(err)
            }
            res.json(task);

        });
    }
});

// Delete Task
router.delete('/task/:id', function (req, res, next) {
    db.collection('tasks').remove({ "_id": mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err)
        }
        res.json(task)
    });

});


// update task
router.put('/task/:id', function (req, res, next) {
   var task = req.body;
   var updateTask={}
   if (task.isDone){
       updateTask.isDone=task.isDone;
   }
   if(task.title){
       updateTask.title=task.title;
   }
   if (!updateTask){
       res.status(400);
       res.json({
           "error":"invalid data"
       });
   }
   else{

    db.collection('tasks').update({ "_id": mongojs.ObjectId(req.params.id)},updateTask,{}, function (err, task) {
      
        if (err) {
            res.send(err)
        }
        res.json(task)
    });
   }
});





module.exports = router;
