
const  express= require('express');

const app = express();


const  getAllUsers =(req, res)=>{
    res.status(500).json(
        {
            status:false,
            message: "No User Found"
        }
    )
};
const  createUser =(req, res)=>{
    res.status(500).json(
        {
            status:false,
            message: "No User Found"
        }
    )
};
const  getSingleUSer =(req, res)=>{
    res.status(500).json(
        {
            status:false,
            message: "No User Found"
        }
    )
};
const  updateUSer =(req, res)=>{
    res.status(500).json(
        {
            status:false,
            message: "No User Found"
        }
    )
};
const  removeUser =(req, res)=>{
    res.status(500).json(
        {
            status:false,
            message: "No User Found"
        }
    )
};
const router = express.Router();
//router

router.route('/').get(getAllUsers).post(createUser);

app.get('/api/v1/users/:id', getSingleUSer);
app.patch('/api/v1/users/:id', updateUSer);
app.delete('/api/v1/users', removeUser);


module.exports= router;