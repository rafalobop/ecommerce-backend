function validaRol(req,res,next){
    const {isAdmin} = req.query
    if(isAdmin == "false"){
        return res.status(403).json({
            msg:'No tiene permisos de administrador',
            error: true,
            code: -1
        })
    }else{
        next()
    }
}

module.exports = validaRol