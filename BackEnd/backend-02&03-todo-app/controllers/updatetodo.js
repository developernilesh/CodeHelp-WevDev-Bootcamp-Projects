const todo = require("../models/Todo")

exports.updateTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const {title,description} = req.body

        const Todo = await todo.findByIdAndUpdate(
            {_id: id},
            {title,description,updatedAt:Date.now()}
        )
        res.status(200)
        .json({
            success: true,
            data: Todo,
            message : "Updated successfully"
        })
    } 
    catch (error) {
        console.error("Occured error: ", error)
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message : error.message
        })
    }
}