import 'colors';

// Prettier log
const log = (title: any, content: any, extra: any = '') => {
	console.log(`[${title.blue}] ${content} ${extra.green}`);
};


export default { log };