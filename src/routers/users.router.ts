import express, { Request, Response } from "express"
const router = express.Router()

const usersController = require("../controllers/users.controller")

router.get("/users", async (req: Request, res: Response) => {
    try {
        usersController.getAllUsers(req, res)
    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

router.get("/users/:id", async (req: Request, res: Response) => {
    try {
        usersController.getUserById(req, res)
    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

router.post("/users", async (req: Request, res: Response) => {
    try {
        usersController.createNewUser(req, res)
    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

router.put("/users/:id", async (req: Request, res: Response) => {
    try {
        usersController.updateUser(req, res)
    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

router.delete("/users/:id", async (req: Request, res: Response) => {
    try {
        usersController.deleteUser(req, res)
    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

module.exports = router
