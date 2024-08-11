import styles from '../page.module.css';

import { math as Math } from 'ver/helpers';

import { Tit } from '@/components/Tit';
import { CardBook } from '@/components/CardBook';
import { MainSlider } from '@/components/MainSlider';

import { INovel } from '@/models/Novel';


const ID = () => Math.randomInt(0, 1e7);


const arr: INovel[] = new Array(10).fill(0).map(() => {
	const r_name = Math.randomInt(0, 1);	

	return {
		type_n_id: ID(),
		age_rating: '16+',
		alter_name: 'After name',
		description: 'Wkmd kams Jjs e apksnd wkajde \n wjwinw dkwownd dw',
		dir_name: 'dir_name',
		en_name: ['Novel', 'Kokaya to Novela'][r_name],
		ru_name: ['Новела', 'Кoкая то новелла'][r_name],
		loaded_chapters_count: 10,
		realise_format_id: ID(),
		release_year_id: ID(),
		tags: ['A', 'B'],
		title_status_id: ID(),
		transfer_status_id: ID(),
		transfers: [ID(), ID()]
	}
});


export default function Page() {
	return <main className={styles.main}>
		/~offline
		<Tit tit='Популярное' style={{ margin: '5vh 5vw' }} />
		<MainSlider data={arr.map(it => <CardBook key={it.type_n_id} novel={it} />)} />

		<Tit tit='Новое' style={{ margin: '5vh 5vw' }} />
		<MainSlider data={arr.map(it => <CardBook key={it.type_n_id} novel={it} />)} />

		<Tit tit='Рекомендации' style={{ margin: '5vh 5vw' }} />
		<MainSlider data={arr.map(it => <CardBook key={it.type_n_id} novel={it} />)} />
	</main>
}
