const express = require('express');
const morgan = require('morgan');
const app = express() ;

const tourRouter= require('./routes/tourRoutes');
const userRouter = require('./routes/userRouter');
//1) middel wear
app.use(morgan('dev'));
app.use(express.json());
const  port=3000;

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//start server
app.listen(port, ()=>{
    console.log(`app  running on port ${port}.....`);
});
