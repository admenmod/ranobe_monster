import styles from './page.module.css';

import { api } from '@/utils/api';
import { NovelPreview } from '@/components/NovelPreview';


export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
	const data = await api.search(searchParams);

	return <main className={styles.main}>
		{ data.map(it => <NovelPreview key={it.dir_name} novel={it} />) }
	</main>
}
