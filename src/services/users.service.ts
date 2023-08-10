import { collections } from "../db/mongodb"
import { User } from "../interfaces/users.interface"

const getAllUsers = async () => {
    return await collections.users.find({}).toArray()
}

const getUserById = async (id: number) => {
    return await collections.users.find({ id: id }).toArray()
}

const createUser = async (user: User) => {
    return await collections.users.insertOne(user)
}

const updateUser = async (id: number, newNote) => {
    return await collections.users.findOneAndUpdate({ id: id }, { $set: newNote })
}

const deleteUser = async (id: number) => {
    return await collections.users.findOneAndDelete({ id: id })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
