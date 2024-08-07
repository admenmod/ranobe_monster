import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ErudaAttach } from '@/components/ErudaAttach';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ranobe monster',
	description: 'Library ranobe "Ranobe monster"',
};

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return <html lang='ru'>
		<body className={inter.className}>
			{children}
			<ErudaAttach />
		</body>
	</html>
}
