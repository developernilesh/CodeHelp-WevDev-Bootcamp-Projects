const todo = require('../models/Todo')

// define route handler
exports.createTodo = async(req,res) => {
    try {
        // extract title and description from request body
        const {title, description} = req.body;
        // craete a new Todo obj and insert it inside DB
        const response = await todo.create({title,description});
        //  send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message : "Entry crated successfully"
            }
        )
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