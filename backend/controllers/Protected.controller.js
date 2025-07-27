const accessProtected = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Protected Route"
    })
}


export {
    accessProtected
}