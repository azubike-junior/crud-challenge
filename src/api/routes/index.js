import { Router } from "express";
import { createUser, getUsers, removeUser } from "../controller/user";

const route = Router();

route.get("/users", getUsers);

route.post("/users", createUser);

route.delete("/users/:id", removeUser);

export default route;
