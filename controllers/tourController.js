const fs = require("fs");

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.getAllTours=  (req, res)=>{res.status(200).json({
    status:true,
    message:"Tours fetch sucessfully",
    code:"GET_TOURSES",
    data:tours,
});
};

exports.checkBody= (req, res, next)=>{
    if(req.body.name || req.body.price){
        return res.status(400).json({
             status : false,
            message: "Missing name or price"
            }
        );

    }
    next();
};

exports.getTour =    (req, res)=> {
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(400).json({
            suess: false,
            message: "Not Found"
        });
    }

    const tour = tours.find(el => el.id === id);
    res.status(200).json({
        status: true,
        message: "Tours fetch sucessfully",
        code: "GET_SINGLE_TOURE",
        data: tour,
    });
};
exports.createTorus= (req, res)=> {
    // console.log(req.body);
    const newID = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newID}, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: true,
            code: "TOUR_CREATE",
            data: newTour
        })
    });
};
