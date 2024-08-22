export const GLOBAL_ENVIRONMENT = (() => {
	try { return window && 'browser'; }
	catch(err) {
		try { return process && 'node'; }
		catch(err) { return 'unknown'; }
	}
})();

export const isServer = GLOBAL_ENVIRONMENT === 'node';
export const isClient = GLOBAL_ENVIRONMENT === 'browser';

if(GLOBAL_ENVIRONMENT === 'unknown') throw new Error(`GLOBAL_ENVIRONMENT: ${GLOBAL_ENVIRONMENT}`);

console.log(process.env.API_DOMAIN, isServer);
if(isServer && !process.env.API_DOMAIN) throw new Error('API_DOMAIN is emrty');
if(isServer && !process.env.HOSTNAME) throw new Error('HOSTNAME is emrty');


export const API_ROOT_SSR = `${process.env.API_DOMAIN}/api`; // https://ranobe.monster:PORT
export const API_ROOT_CSR = `${isServer ? process.env.HOSTNAME : location.origin}/api`; // http://localhost:3000

export const API_ROOT = isServer ? API_ROOT_SSR : API_ROOT_CSR;
