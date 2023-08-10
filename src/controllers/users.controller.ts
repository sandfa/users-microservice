import { Request, Response } from "express"
import { User } from "../interfaces/users.interface"

const usersService = require("../services/users.service")

const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await usersService.getAllUsers()
    res.status(200).send(allUsers)
}

const getUserById = async (req: Request, res: Response) => {
    const userId: number = +req.params.id
    const user = await usersService.getUserById(userId)
    res.status(200).send(user)
}

const createNewUser = async (req: Request, res: Response) => {
    const newUser: User = {
        id: Math.floor(Math.random() * Date.now()),
        titel: req.body.titel,
        text: req.body.text,
    }
    const response = await usersService.createUser(newUser)
    res.status(201).send(response)
}

const updateUser = async (req, res) => {
    const userId: number = +req.params.id
    const newUser: User = req.body
    const user = await usersService.updateUser(userId, newUser)
    res.status(201).send(user)
}

const deleteUser = async (req, res) => {
    const userId: number = +req.params.id
    const user = await usersService.deleteUser(userId)
    res.status(200).send(user)
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
}
