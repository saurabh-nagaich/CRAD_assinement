const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Filter = require("./../models/filter");

exports.updateFilter = catchAsync(async (req, res,next)=>{
    try{
        await Filter.deleteMany();
        await Filter.create(req.body);
        res.status(200).json({
            status: "success",
            message:"data update successfully loaded!"
        });
    }catch(err){
        res.status(404).json({
            status: "error",
            message:err,
        });
    }
})

exports.deleteFilter = async (req, res,next)=>{
        try{
            await Filter.deleteMany();
            console.log("Data successfullt Deleted! ")
            res.status(200).json({
                status: "success",
                message:"all date is removed"
            });
        }catch(err){
            res.status(404).json({
                status: "error",
                message:err,
            });
        }
}