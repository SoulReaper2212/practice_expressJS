const jwt = require('jsonwebtoken');
const loginMiddleware = (req,res,next) =>{
   

    const { username, password } = req.body;
    if(username !== "ali" || password !== "1234"){
           
        res.send('invalid password')
        return;
    }

    const token = jwt.sign({ username: username }, 'your-secret-key', { expiresIn: '1h' });
    req.token = token;
    next();
}

const authMiddleware = (req,res,next) => {
    const {token} = req.body;

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            
            return res.status(401).json({ message: 'Invalid or expired token' });
        }  
        req.user = decoded; 
        next(); 
    });

}

module.exports = {
   loginMiddleware,
   authMiddleware
};