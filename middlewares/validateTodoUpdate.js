const validateTodoupdate = (req, res, next)=>{
    const {name, completed} = req.body
    if(!name){
        return res.status(400).json({message: "Name is required"})
    }
    if(completed !== undefined && typeof completed !== 'boolean'){
        return res.status(400).json({message: "Completed must be a boolean value"})
    }
    next()
}

module.exports = validateTodoupdate