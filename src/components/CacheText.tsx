'use client';

import { useEffect, useState } from 'react';


export function CacheText() {
	const [text, setText] = useState('');

	useEffect(() => {
		(async () => {
			let r = '';

			const cache = await caches.keys();
			console.log(cache);
			// const keys = await cache.keys();

			setText(r);
		})();
	}, []);

	return <textarea>
		{text}
	</textarea>
}
