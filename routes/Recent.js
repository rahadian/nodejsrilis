var express = require('express');
var router = express.Router();
var Task = require('../models/Recent');

router.get('/:year?/:month?/:day?/:publish?/:fokus?/:kolom?/',function(req,res,next){   
    if(req.params.year,req.params.day-1,req.params.month,req.params.publish,req.params.fokus,req.params.kolom){
        var dateFormat = new Date(Date.UTC(req.params.year,req.params.day-1,req.params.month,0,0));
        Task.getTaskById(dateFormat,req.params.publish,req.params.fokus,req.params.kolom,function(err,rows){
            
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
     }
    else{
        Task.getAllTasks(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});
module.exports=router;