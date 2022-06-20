exports.viewPics = async(req,res,next)=>{
    const key= req.params.fileKey;
    if(key)
    {
        const readStream = getFileStream(key);
        if(key) readStream.pipe(res);
        else
        { res.status(400).json({
            status : false,
            message : "Incorrect Data"
        })}
    }
    else
    {
        res.status(400).json({
            status : false,
            message : "Not Given the Complete Data"})
    }
}