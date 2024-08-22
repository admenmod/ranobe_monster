'use client';

import styles from '@/app/search/page.module.css';

import { useEffect, useState } from 'react';
import { useAsync } from '@/hooks/useAsync';

import { NovelPreview } from '@/components/NovelPreview';

import { api } from '@/utils/api';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';


function logF<F extends (this: any, ...args: any) => any>(fn: F, before?: string, after?: string) {
	return function(this: any, ...args: any) {
		console.log(before);
		const r = fn.apply(this, args);
		console.log(after);
		return r;
	} as F;
}

export default function({ }: { searchParams: Record<string, string> }) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = Object.fromEntries(useSearchParams().entries());

	const [q, setQ] = useState(searchParams.q || '');
	const search = useAsync(api.search, {
		onpending: searchParams => {
			const p = typeof searchParams === 'string' ? searchParams
				: '?'+Object.entries(searchParams ?? {}).map(([i, v]) => `${i}=${v}`).join('&');

				router.push(`${pathname}${p}`);
		}
	});

	useEffect(() => {
		setQ(searchParams.q || '');
		void search(searchParams);
	}, [JSON.stringify(searchParams)]);

	return <>
		<nav>
			<input type='search' style={{
				padding: '4px',
				width: '100%'
			}} value={q} onInput={e => setQ(e.currentTarget.value)} onKeyUp={async e => {
				if(!search.isPending && e.key === 'Enter') {
					e.currentTarget.blur();
					search({ ...searchParams, q });
				}
			}} />
		</nav>

		<main className={styles.main}>
			{ !search.isResolved && <div>Loading...</div> }
			{ search.isError && <div>Error loading</div> }
			{ search.isSuccess && (search.data
			? search.data.map(it => <NovelPreview key={it.dir_name} novel={it} />)
			: <div>Ничего ненайдено по запросу "{q}"</div>) }
		</main>
	</>
}
