import { Request, Response, Express } from "express";
import { bloodGroups, getAllUsers, register } from "../service/user";
let router: Express = require("express").Router();
router.get("/bloodgroup", async (req: Request, res: Response) => {
    
  bloodGroups().then((data) => res.send(data));
});
router.post('/register',async (req: Request, res: Response) => {
    
  register(req.body).then((data) => res.send(data));
});
router.get("/users", async (req: Request, res: Response) => {
    
  getAllUsers().then((data) => res.send(data));
});
export default router;
