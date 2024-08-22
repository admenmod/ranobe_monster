'use client';

import Link from 'next/link';


export default function Page() {
	return <main style={{
		display: 'grid',
		alignItems: 'center',
		justifyItems: 'center',
		width: '100%',
		height: '100%'
	}}>
		<div style={{ fontSize: '5vw', fontFamily: 'monospace' }}>Error loading</div>
		<Link href='/'>Home</Link>
	</main>
}
