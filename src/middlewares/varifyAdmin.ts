import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";


export default (
    req: Request,
    res: Response, 
    next: NextFunction
) => {
    try {
        const token = req.headers["authorization"];
        if (!token){ res.status(401).json({ err: "Unauthorized" });return}
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = payload
        if(!(payload as any).isAdmin) {
            res.status(403).json({
                 err: "Only admin can access this route" 
            });
        }
        next()
    } catch (err) {
        res.status(401).json(err as JsonWebTokenError);
    }
}