import { Request, Response, NextFunction } from "express";

function logger(req: Request, res: Response, next: NextFunction) {
    console.log("Time:", Date().toLocaleString())
    console.log("Request Method:", req.method)
    console.log("Request URL:", req.originalUrl)
    next()
}

export {
    logger
}