import styles from './style.module.css';

import Image from 'next/image';
import type { INovel } from '@/models/Novel';


export function CardBook({ novel }: { novel: INovel }) {
	return <div className={styles.card_book}>
		{ novel.ru_name.length + novel.en_name.length + 3 < 15
		? <h3>{novel.ru_name} / <span style={{ color: '#aaaaaa', fontSize: '70%' }}>{novel.en_name}</span></h3>
		: <h3>{novel.ru_name}<br /><span style={{ color: '#aaaaaa', fontSize: '70%' }}>{novel.en_name}</span></h3> }

		<Image src='/img/undefined-Imgur.gif' alt='cat code' width={180} height={130} />
	</div>
}
