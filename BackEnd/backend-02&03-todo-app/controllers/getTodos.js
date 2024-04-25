const todo = require("../models/Todo")

// define router handler
exports.getTodos = async(req,res) => {
    try {
        const todos = await todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is Fetched"
        })
    } 
    catch (error) {
        console.error("Fetching error", error)
        res.status(500)
        .json({
            success:false,
            data:error.message,
            message:"Server error"
        })
    }
}

exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const Todo = await todo.findById({_id: id})

        if(!Todo){
            return res.status(404).json({
                success: false,
                message:"No data found"
            })
        }
        else{
            res.status(200)
            .json({
                success: true,
                data: Todo,
                message: `Todo ${id} data successfully fetched`
            })
        }
    } 
    catch (error) {
        console.error("Fetching error", error)
        res.status(500)
        .json({
            success:false,
            data:error.message,
            message:"Server error"
        }) 
    }
}