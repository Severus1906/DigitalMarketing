const adminAuth = (req,res,next) => {
    const token = req.headers["x-admin-token"];
    if(token !== process.env.ADMIN_TOKEN){
        return res.status(401).json({success:false, message:"Unauthorized"})

    }
    next();
}

export default adminAuth;