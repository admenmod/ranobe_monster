import styles from './page.module.css';

import { api } from '@/utils/api';


export default async function Page() {
	const data = await api.tags();

	return <main className={styles.main}>
		<div className={styles.wrapper_tags}>
			{ Object.keys(data).map(id => <div className={styles.tag}>{data[id]}</div>) }
		</div>
	</main>
}
