import { Request, Response } from "express";
import User from "../models/user";


export const getUsers = async(req: Request, res: Response) => {

    const users = await User.findAll();

    res.json(users);
}

export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getUser',
        id
    })
}

export const postUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'postUser',
        body
    })
}

export const putUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req.params;

    res.json({
        msg: 'putUser',
        body,
        id
    })
}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    })
}