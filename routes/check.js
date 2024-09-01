const {Router} = require('express');
const router = Router();

router.get('/standard', (req,res)=>{
    return res.render('standard',{title:"BMI CALCULATOR" });
});
router.get('/metrical', (req,res)=>{
    return res.render('metrical',{title:"BMI CALCULATOR" });
});

router.get('/bmi-index', (req,res)=>{
    return res.render('bmi_index',{title:"BMI CALCULATOR" });
});



module.exports = router;