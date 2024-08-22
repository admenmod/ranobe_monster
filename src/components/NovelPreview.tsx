import styles from './style.module.css';

import Link from 'next/link';
import Image from 'next/image';
import type { INovel } from '@/models/Novel';


export function NovelPreview({ novel }: { novel: INovel }) {
	return <div className={styles.novel_preview}>
		<Link href={`/novels/${novel.dir_name}`} style={{ maxWidth: '100%' }}>
			{ novel.ru_name.length + novel.en_name.length + 3 < 15
			? <h4>{novel.ru_name} / <span style={{ color: '#aaaaaa', fontSize: '70%' }}>{novel.en_name}</span></h4>
			: <h4>{novel.ru_name}<br /><span style={{ color: '#aaaaaa', fontSize: '70%' }}>{novel.en_name}</span></h4> }
		</Link>

		{ novel.description ? <details>
			<summary>Описание</summary>
			<p>{novel.description}</p>
		</details> : '' }

		<Image src='/img/undefined-Imgur.gif' alt='cat code' width={300} height={300/400*300} />

		<div className={styles.wrapper_tags}>{
			novel.tags.map((it, i) => <div key={i} className={styles.novel_tag}>{it}</div>)
		}</div>
	</div>
}
