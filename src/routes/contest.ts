import express from "express"

const router = express.Router();

router.post('/create',(req,res)=>{
    const {
        name,
        startTime,
        duration,
        createdById,
        problems // array of problem data
      } = req.body;
    
    
})

export default router;