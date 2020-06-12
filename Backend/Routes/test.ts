import util from '../utils';
import { Request, Response } from 'express';

const type = 'GET';
const name = 'test';

const app = (req: Request, res: Response) => {

    res.json(util.wrap_resp(200, 'success', 'Ayy'));
};

export default { type, name, app };