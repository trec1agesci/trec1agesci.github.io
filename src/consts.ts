export const SITE_TITLE = 'AGESCI Trecastagni 1';
export const SITE_DESCRIPTION = 'Fare del nostro meglio per essere sempre pronti a servire';
export const LOGO_PATH = '/images/2017/01/cropped-TRECASTAGNI1_Colore-1.png';
export const HEADER_LOGO_PATH = '/images/2025/09/logo_trec-03.png';
export const WAITLIST_BANNER_PATH = '/images/2016/10/Senza-titolo-1-2.jpg';
export const DEFAULT_OG_IMAGE = LOGO_PATH;
export const CONTACT_EMAIL = 'trecastagni1@sicilia.agesci.it';
export const INSTAGRAM_URL = 'https://www.instagram.com/agesci_trecastagni1/';
export const INSTAGRAM_HANDLE = '@agesci_trecastagni1';
export const FACEBOOK_URL = 'https://www.facebook.com/groups/103474285593/';
export const GOOGLE_LISTING_URL = 'https://share.google/0Ucq1eRDL5wxnh0YL';
export const MAP_EMBED_URL = 'https://www.google.com/maps?q=AGESCI+Trecastagni+1&output=embed';
export const POSTS_PER_PAGE = 10;
export const TIME_ZONE = 'Europe/Rome';

export const CATEGORIES = [
	{ slug: 'news', path: 'news', label: 'News' },
	{ slug: 'branco', path: 'news/branco', label: 'Branco' },
	{ slug: 'reparto', path: 'news/reparto', label: 'Reparto' },
	{ slug: 'clan', path: 'news/clan', label: 'Clan' },
] as const;

export interface NavLink {
	href: string;
	label: string;
	external?: boolean;
}

const DRIVE_URL =
	'https://drive.google.com/drive/folders/0Bzb7ZDksNGQpRV84cEhYNXlTU2c?resourcekey=0-9u8mKNBGINNYoTXPCDzm3A&usp=drive_link';

export const TOP_LINKS: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/capi/', label: 'Calendario' },
	{ href: '/iscrizione/', label: 'Lista d’attesa' },
	{ href: '/contatti/', label: 'Contatti' },
	{ href: DRIVE_URL, label: 'Documenti', external: true },
];

export const SIDEBAR_LINKS: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: DRIVE_URL, label: 'Documenti', external: true },
	{ href: '/la-storia/', label: 'Storia' },
	{ href: '/gruppo/', label: 'Gruppo' },
	{ href: '/media/', label: 'Media' },
	{ href: '/contatti/', label: 'Contatti' },
	{ href: 'https://www.facebook.com/zonaetnea/', label: 'Zona Etnea', external: true },
	{ href: 'http://www.sicilia.agesci.it/', label: 'Sicilia', external: true },
	{ href: 'https://www.agesci.it/', label: 'AGESCI', external: true },
	{ href: 'https://www.lanuovazagara.it/', label: 'Scout Shop', external: true },
	{ href: 'https://www.facebook.com/santuariotrecastagni/', label: 'Santuario', external: true },
];

export const SOCIAL_LINKS: NavLink[] = [
	{ href: FACEBOOK_URL, label: 'Facebook', external: true },
	{ href: INSTAGRAM_URL, label: 'Instagram', external: true },
];

export const FOOTER_LINKS: NavLink[] = [
	{ href: '/privacy/', label: 'Privacy' },
	{ href: '/informativa-sulla-privacy/', label: 'Informativa sulla privacy' },
	{ href: '/termini-e-condizioni/', label: 'Termini e condizioni' },
	{ href: '/uso-di-immagini/', label: 'Uso di immagini' },
];
