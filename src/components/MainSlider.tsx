'use client';

import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from '@/app/page.module.css';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import type { IBook } from '@/types/IBook';


export function CardBook({ title }: IBook) {
	return <div className={styles.card_book}>
		<h3>{title}</h3>
		<Image
			src='/assets/img/undefined-Imgur.gif'
			alt='cat code'
			width={130} height={100}
		/>
	</div>
}


export function MainSlider({ data }: Readonly<{
	data: React.ReactElement[];
}>) {
	return <Swiper
		className={styles.slider}
		slidesPerView='auto'
		spaceBetween={20}
		modules={[Scrollbar]}
		scrollbar={{ hide: true, dragClass: styles.swiper_scrollbar_drag }}
		style={{ padding: '10px', paddingBottom: '15px', background: '#444444' }}
	>
		{ data.map(it => <SwiperSlide key={it.key} style={{ width: 'auto' }}>{it}</SwiperSlide>) }
	</Swiper>
}
