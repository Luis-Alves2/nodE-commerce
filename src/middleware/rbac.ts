// import * as rbac from 'rbac';
// import { NextFunction, Request, Response } from 'express';

// enum UserType {
//   CLIENT,
//   ADMIN,
// }

// const roles = new rbac.RoleManager([
//   {
//     name: UserType.CLIENT,
//     permissions: ['read:product', 'create:order', 'read:order', 'update:order'],
//   },
//   {
//     name: UserType.ADMIN,
//     permissions: ['read:all', 'write:all'], // Full access for Admin
//   },
// ]);

// export const checkPermission = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const userRole = req.user?.role;

//     if (!userRole) {
//       return res.status(403).json({ message: 'Forbidden' });
//     }

//     const permission = req.originalUrl.split('/')[3]; // Assuming permission is in the 4th path segment

//     if (permission && !roles.can(userRole, permission)) {
//       return res.status(403).json({ message: 'Forbidden' });
//     }

//     next();
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
