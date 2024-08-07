import styles from './page.module.css';
import { math as Math } from 'ver/helpers';

import type { IBook } from '@/types/IBook';

import { Tit } from '@/components/Tit';
import { CardBook, MainSlider } from '@/components/MainSlider';


const arr: IBook[] = new Array(10).fill(0).map(() => ({
	title: Math.randomInt(1, 100).toString()
}));


export default function Home() {
	return <main className={styles.main}>
		<Tit tit='Перевод ранобе 1' style={{ margin: '5vh 5vw' }} />
		<MainSlider data={arr.map(it => <CardBook key={it.title} title={`Ranobe ${it.title}`} />)} />

		<Tit tit='Перевод ранобе 2' style={{ margin: '5vh 5vw' }} />
		<MainSlider data={arr.map(it => <CardBook key={it.title} title={`Ranobe ${it.title}`} />)} />

		<Tit tit='Перевод ранобе 3' style={{ margin: '5vh 5vw' }} />
		<MainSlider data={arr.map(it => <CardBook key={it.title} title={`Ranobe ${it.title}`} />)} />
	</main>
}
