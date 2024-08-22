import { API_ROOT } from '@/config';

import type { ITags } from '@/models/Tags';
import type { INovel } from '@/models/Novel';


const searchParamsToString = (sp?: string | Record<string, string>) => !sp ? '' : typeof sp === 'string' ? sp
	: '?'+Object.entries(sp).map(([i, v]) => `${i}=${v}`).join('&');


export namespace api {
	export const tags = Object.assign(() => fetch(tags.url(), {
		cache: 'force-cache'
	}).then(data => data.json()) as Promise<ITags>, {
		url: () => `${API_ROOT}/tags`
	});

	export const search = Object.assign((sp?: string | Record<string, string>): Promise<INovel[] | null> => {
		return fetch(search.url(sp), {
			cache: 'force-cache'
		}).then(data => data.json());
	}, {
		url: (sp?: string | Record<string, string>) => `${API_ROOT}/search${searchParamsToString(sp)}`
	});

	export const novel = Object.assign((id: string): Promise<INovel | null> => fetch(novel.url(id), {
		cache: 'force-cache'
	}).then(data => data.json()), {
		url: (id: string) => `${API_ROOT}/novels/${id}`
	});
}
