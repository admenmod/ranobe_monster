import pstyles from './page.module.css';
import cstyles from '@/components/style.module.css';

import { api } from '@/utils/api';


export default async function Page() {
	const data = await api.tags();

	return <main className={pstyles.main}>
		<div className={pstyles.wrapper_tags}>
			{ Object.keys(data).map(id => <div className={cstyles.novel_tag}>{data[id]}</div>) }
		</div>
	</main>
}
