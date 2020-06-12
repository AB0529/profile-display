import 'colors';

// Prettier log
const log = (title: any, content: any, extra: any = '') => {
	console.log(`[${title.blue}] ${content} ${extra.green}`);
};

// Wrap JSON response
const wrap_resp = (status: number, state = 'fail' || 'success', result: any) => {
    return {
        status: status,
        state: state,
        result: result
    };
}


export default { log, wrap_resp };