import util from '../utils';
import { Request, Response } from 'express';

const type = 'POST';
const name = 'gamer_hideout/api/register';

const app = (req: Request, res: Response) => {
    let bod = req.body;
    let username = bod.username;
    let password = bod.password;

    if (username == 'test123')
        // util.wrap_resp(401, 'fail', )
        return res.json({
            status: 401,
            state: 'fail',
            error: 'Invalid username'
        });
    

};

export default { type, name, app };