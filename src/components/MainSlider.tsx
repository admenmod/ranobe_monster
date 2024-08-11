'use client';

import 'swiper/css';
import 'swiper/css/scrollbar';
import styles from './style.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';


export function MainSlider({ data }: Readonly<{
	data: React.ReactElement[];
}>) {
	return <Swiper
		className={styles.slider}
		slidesPerView='auto'
		spaceBetween={20}
		style={{ padding: '10px', background: '#444444' }}
	>
		{ data.map((it, i) => <SwiperSlide key={i} style={{ width: 'auto' }}>{it}</SwiperSlide>) }
	</Swiper>
}
