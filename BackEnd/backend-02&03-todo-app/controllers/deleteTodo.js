const todo = require("../models/Todo")

exports.deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;
        
        await todo.findByIdAndDelete(id)

        res.status(200)
        .json({
            success: true,
            message:"Deleted Successfully"
        })
    } 
    catch (error) {
        console.error("Occured error: ", error)
        res.status(500).json(
            {
                success: false,
                data: "Internal server error",
                message : error.message
            }
        )
    }
}