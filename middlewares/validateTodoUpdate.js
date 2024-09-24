const validateTodoUpdate = (req,res,next)=>{
    const {name,completed} = req.body
    if(!name){
        return res.status(400).json({message:"Name id required"})
    }
    if(completed !== undefined && typeof completed !=='boolean'){
        return res.status(400).json({message:"completed must be a boolean value"})
    }
    next()
}
module.exports = validateTodoUpdate