const  express= require('express');

const app = express();

const tourController = require('../controllers/tourController')


const router= express.Router();


//routers
router.param('id', (req, res, next, value)=>{
    console.log(`the tour id reqest is: ${value}`);
    next();
});

router.route('/').get(tourController.getAllTours).post(
    tourController.checkBody,
    tourController.createTorus
);

router.route('/:id').get(tourController.getTour);


module.exports = router;