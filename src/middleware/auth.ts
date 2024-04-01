import jwt, { decode } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const secret = process.env.JWT_SECRET || '';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    console.log('authenticating');



    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token does not exist - should this be shown?' });
    }
    
    const decoded = jwt.verify(token, secret);
    console.log('authenticated');
    req.body.userId = typeof decoded !== 'string' ? decoded?.userId : undefined;
    req.body.role = typeof decoded !== 'string' ? decoded?.role : undefined;

    console.log(req.body.userId)
    next();
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(403).json({ message: 'Invalid token - authenticate midd' });
  }
};

enum UserType {
    CLIENT,
    ADMIN,
}

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
    try {

        console.log('authorizing');
        const userRole = req.body?.role;
        const userId = req.body.userId;
        console.log(userRole);
        console.log(userId);
        
        

        if (!userRole) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        if(userRole == 'USER'){// 0 == CLIENT
            console.log('role restricted')
            console.log(req.path)
            if(req.path == '/products'){
                if(req.method != 'GET'){
                    return res.status(403).json({ message: 'Forbidden' });
                }
            }
            else if(req.path == '/orders'){
                if(req.method != 'POST'){
                    return res.status(403).json({ message: 'Forbidden' });
                }
            }
            else if(req.path == '/users'){
                if(req.method != 'POST'){
                    return res.status(403).json({ message: 'Forbidden' });
                }
            }
            else if(req.path === `/users/${userId}`){
                console.log('entered user view')
                console.log(userId)
                console.log(req.method)
                if(req.method != 'PUT' && req.method != 'GET'){
                    return res.status(403).json({ message: 'Forbidden' });
                }
            }
            else{
                return res.status(403).json({ message: 'Forbidden' });
            }
        } //if client

        
        console.log('authorized')
        next();
        //req.body.userId = decode(token);
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
  };

 export const checkPermission = (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.body?.role as keyof typeof permissions;
    const userId = req.body?.id

    if (!userRole) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    // Define permissions based on user role
    const permissions = {
        CLIENT: {
            '/products': ['GET'],
            '/orders': ['POST'],
            '/users': ['POST'],
            '/users/:userId': ['PUT']
        },
    };

    // Check if the user role and request method are allowed for the requested path
    const allowedMethods = permissions[userRole] as { [key: string]: string[] };
    const allowedPaths = Object.keys(allowedMethods);
    const method = req.method;
    const path = req.path;

    if (allowedPaths.includes(path) && allowedMethods[path].includes(method)) {
        next();
    } else {
        return res.status(403).json({ message: 'Forbidden' });
    }
};