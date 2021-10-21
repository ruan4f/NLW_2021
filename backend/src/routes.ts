import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

router.post("/autenticate", new AuthenticateUserController().handle);

export { router }