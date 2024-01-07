const express = require('express');
const fs= require('fs');
const app = express() ;
app.use(express.json());
const  port=3000;

app.get("/", (req, res)=>{
    res.status(200).json({message: 'Hello for server side', app: 'Natours'});
});

const tours= JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res)=>{
 res.status(200).json({
     status:true,
     message:"Tours fetch sucessfully",
     code:"GET_TOURSES",
     data:tours,
 });
});



app.post('/api/v1/createTours',(req, res)=>{
    // console.log(req.body);
    const newID=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newID}, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err=>{
       res.status(201).json({
           status: true,
           code:"TOUR_CREATE",
           data:newTour
       })
    });
});


app.listen(port, ()=>{
    console.log(`app  running on port ${port}.....`);
} );
