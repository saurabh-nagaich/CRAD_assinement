const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Filter = require("./../models/filter");
var validator = require('youtube-validator')


exports.getAllFilter = catchAsync(async (req, res,next)=>{
    const Filters= await Filter.find().sort("created_at");
    res.status(200).json({
        status: "success",
        length: Filters.length,
        data: {
            Filters,
        },
    })
})

exports.getFilter = catchAsync(async (req, res,next)=>{
    console.log(req.params.id)
    let filter = await Filter.findById(req.params.id);

    if (!filter)
        return next(new AppError("No document found with that Id", 404));

    res.status(200).json({
        status: "success",
        data: {
            filter,
        },
    });
})

exports.createFilter = catchAsync(async (req, res,next)=>{
    let url = req.body.content_url.substring(8);

    if(req.body.type==="VIDEO_AD"){
        await validator.validateUrl(url, function(res, err) {
            if(err)
            {
                next(new AppError("video url is not voild",404))
            }
            
        })
    }
    const newFilter = await Filter.create(req.body);

    res.status(201).json({
        status: "Succes",
        data: {
            newFilter,
        },
    });
})


exports.updateFilter = catchAsync(async (req, res,next)=>{
    const updatedFilter = await Filter.findByIdAndUpdate(
        req.params.id,
        {...req.body, updateAt : Date.now() - 1000},
        {
            new: true,
            runValidators: true,
        }
    );

    if (!updatedFilter)
        return next(new AppError("No document found with that id", 404));

    res.status(200).json({
        status: "success",
        data: {
            updatedFilter,
        },
    });
})

exports.deleteFilter = catchAsync(async (req, res,next)=>{
    const doc = await Filter.findByIdAndDelete(req.params.id);

    if (!doc) {
        return next(new AppError("No document found with that Id", 404));
    }

    res.status(204).json({
        status: "success",
        data: null,
    });
})