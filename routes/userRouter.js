
const  express= require('express');

const app = express();



const router = express.Router();
//router

router.route('/').get(getAllUsers).post(createUser);

app.get('/api/v1/users/:id', getSingleUSer);
app.patch('/api/v1/users/:id', updateUSer);
app.delete('/api/v1/users', removeUser);


module.exports= router;