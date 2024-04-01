// import { NextFunction, Request, Response } from 'express';
// import yup from 'yup';

// const validateBody = (schema: yup.Schema) => async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     await schema.validate(req.body);
//     next();
//   } catch (error) {
//     res.status(400).json({
//          message: error.errors.join(', ') 
//         // });
//   }
// };

// export { validateBody };