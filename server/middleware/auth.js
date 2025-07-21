import jwt from "jsonwebtoken";
 
const auth = (req, res, next)=> {
    const token = req.headers.authorization;
     if (!token) {
        return res.status(401).json({ success: false, message: "NO token provided"
        }
        );
     }


    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({success : false , message: "Invalid Token"})

    }
};

 export default auth ;