import { Router } from "express";
import { eventServices } from "../controllers/event";
import { createPersonnel } from "../controllers/personnel";
import { createSnacks } from "../controllers/snacks";
import { createTools } from "../controllers/tools";



const router = Router();



router.put('/event/:_id', eventServices);

router.post('/personnel',createPersonnel)

router.post('/tools',createTools)

router.post('/snacks',createSnacks)





export default router;