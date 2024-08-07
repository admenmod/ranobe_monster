'use client';

import type { CSSProperties } from 'react';


export function Tit({ tit, style }: Readonly<{
	tit: string;
	style: CSSProperties;
}>) {
	return <h3 style={style} onClick={e => {
		let t = e.currentTarget.textContent;

		if(t === null) return;
		t = '#'+t;

		if(t !== decodeURI(location.hash)) location.hash = t;
		else history.replaceState(null, '', location.href.replace(/#.*$/, ''));
	}}>{tit}</h3>;
}
