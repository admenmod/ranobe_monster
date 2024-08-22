'use client';

import styles from '@/app/search/page.module.css';

import { useEffect } from 'react';
import { useAsync } from '@/hooks/useAsync';

import { api } from '@/utils/api';
import { useRouter, usePathname } from 'next/navigation';
import { Novel } from '@/components/Novel';


export default function() {
	const router = useRouter();
	const id = usePathname().split('/').at(-1)!;

	const novel = useAsync(api.novel, {
		onpending: () => {
			// router.push(`${pathname}${p}`);
		}
	});

	useEffect(() => void novel(id), ['novel', id]);

	return <main className={styles.main}>
		{ !novel.isResolved && <div>Loading...</div> }
		{ novel.isError && <div>Error loading</div> }
		{ novel.isSuccess && (novel.data
		? <Novel novel={novel.data} />
		: <div>Ничего ненайдено по запросу "{id}"</div>) }
	</main>
}
