import './globals.css';
import type { Metadata, Viewport } from 'next';

import Link from 'next/link';
import { ErudaAttach } from '@/components/ErudaAttach';


const APP_NAME = 'Ranabe monster';
const APP_DESCRIPTION = 'Library ranobe "Ranobe monster"';
const APP_KEYWORDS = 'ranobe, library, transfer';
const APP_DEFAULT_TITLE = 'Ranobe monster';
const APP_TITLE_TEMPLATE = `%s - ${APP_NAME}`;

const _TITLE = {
	default: APP_DEFAULT_TITLE,
	template: APP_TITLE_TEMPLATE
};

export const metadata: Metadata = {
	title: _TITLE,
	applicationName: APP_NAME,
	description: APP_DESCRIPTION,
	keywords: APP_KEYWORDS,
	manifest: '/manifest.json',
	appleWebApp: {
		title: APP_NAME,
		capable: true,
		statusBarStyle: 'default',
		// startupImage: []
	},
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: 'website',
		siteName: APP_NAME,
		title: _TITLE,
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: 'summary',
		title: _TITLE,
		description: APP_DESCRIPTION
	}
};

export const viewport: Viewport = {
	width: 'device-width',
	userScalable: false,
	initialScale: 1
};


const link_style = {
	margin: '0px 5px',
	padding: '5px 10px',
	fontFamily: 'monospace',
	background: '#333333'
} satisfies Partial<CSSStyleDeclaration>;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <html lang='ru'>
		<body>
			<nav style={{ padding: '10px' }}>
				<Link style={link_style} href='/'>Home</Link>
				<Link style={link_style} href='/search'>Search</Link>
				<Link style={link_style} href='/tags'>Tags</Link>
			</nav>
			{children}
			<ErudaAttach />
		</body>
	</html>
}
