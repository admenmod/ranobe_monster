import { ITags } from '@/models/Tags';
import { INovel } from '@/models/Novel';


const API_ROOT_CSR = `${process.env.HOSTNAME || 'http://localhost:3000'}/api`;
const API_ROOT_SSR = `${process.env.API_DOMAIN || 'http://ranobe.monster:8080'}/api`;

const API_ROOT = (() => {
	try { return window && true; }
	catch(err) { return false; }
})() ? API_ROOT_CSR : API_ROOT_SSR;

export namespace api {
	export const tags = () => fetch(`${API_ROOT}/tags`, {
		cache: 'force-cache'
	}).then(data => data.json()) as Promise<ITags>;

	export const search = (params: string | Record<string, string> = {}) => {
		const p = typeof params === 'string' ? params : '?'+Object.entries(params).map(([i, v]) => `${i}=${v}`).join('&');

		return fetch(`${API_ROOT}/search${p}`, {
			cache: 'force-cache'
		}).then(data => data.json()) as Promise<INovel[]>;
	};
}
