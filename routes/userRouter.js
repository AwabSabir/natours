
const  express= require('express');

const app = express();
const userController=require('../controllers/userController');


const router = express.Router();
//router

router.route('/').get(userController.getAllUsers).post(userController.createUser);

app.get('/api/v1/users/:id', userController.getSingleUSer);
app.patch('/api/v1/users/:id', userController.updateUSer);
app.delete('/api/v1/users', userController.removeUser);


module.exports= router;