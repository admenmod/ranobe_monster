import styles from './style.module.css';

import Image from 'next/image';
import type { INovel } from '@/models/Novel';


export function NovelPreview({ novel }: { novel: INovel }) {
	return <div className={styles.novel_preview}>
		{ novel.ru_name.length + novel.en_name.length + 3 < 15
		? <h3>{novel.ru_name} / <span style={{ color: '#aaaaaa', fontSize: '70%' }}>{novel.en_name}</span></h3>
		: <h3>{novel.ru_name}<br /><span style={{ color: '#aaaaaa', fontSize: '70%' }}>{novel.en_name}</span></h3> }

		{ novel.description ? <details>
			<summary>Описание</summary>
			<p>{novel.description}</p>
		</details> : '' }

		<Image src='/img/undefined-Imgur.gif' alt='cat code' width={200} height={150} />

		<div className={styles.wrapper_tags}>{
			novel.tags.map((it, i) => <div key={i} className={styles.novel_tag}>{it}</div>)
		}</div>
	</div>
}
