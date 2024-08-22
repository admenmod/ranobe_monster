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


export const API_ROOT_SSR = `${process.env.API_DOMAIN || 'https://ranobe.monster:44300'}/api`;
export const API_ROOT_CSR = `${process.env.HOSTNAME || 'http://localhost:3000'}/api`;

export const API_ROOT = isServer ? API_ROOT_SSR : API_ROOT_CSR;
