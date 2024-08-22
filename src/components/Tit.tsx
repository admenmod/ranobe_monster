'use client';

import type { CSSProperties } from 'react';


export function Tit({ tit, style }: Readonly<{
	tit: string;
	style: CSSProperties;
}>) {
	return <a href={`#${tit}`} className='tit' onClick={e => e.preventDefault()}>
		<h3 className='tit' style={style} onClick={() => {
			const t = '#'+tit;

			if(t !== decodeURI(location.hash)) location.hash = t;
			else history.pushState(null, '', location.href.replace(/#.*$/, ''));
		}}>
			<span style={{ opacity: 0.5, fontFamily: 'monospace' }}>#</span> {tit}</h3>
	</a>
}
