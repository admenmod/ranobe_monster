import { useEffect, useState } from 'react';


export function useHash() {
	const [hash, setHash] = useState(window.location.hash);

	useEffect(() => {
		const handler = () => setHash(decodeURIComponent(window.location.hash));
		window.addEventListener('hashchange', handler);
		return () => window.addEventListener('hashchange', handler);
	});

	return hash;
}
