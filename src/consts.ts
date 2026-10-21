export const SITE_TITLE = 'AGESCI Trecastagni 1';
export const SITE_DESCRIPTION = 'Fare del nostro meglio per essere sempre pronti a servire';
export const LOGO_PATH = '/wp-content/uploads/2017/01/cropped-TRECASTAGNI1_Colore-1.png';
export const DEFAULT_OG_IMAGE = LOGO_PATH;
export const POSTS_PER_PAGE = 10;
export const TIME_ZONE = 'Europe/Rome';

export const CATEGORIES = [
	{ slug: 'news', path: 'news', label: 'News' },
	{ slug: 'branco', path: 'news/branco', label: 'Branco' },
	{ slug: 'reparto', path: 'news/reparto', label: 'Reparto' },
	{ slug: 'clan', path: 'news/clan', label: 'Clan' },
] as const;

export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/gruppo/', label: 'Gruppo' },
	{ href: '/la-storia/', label: 'La storia' },
	{ href: '/media/', label: 'Media' },
	{ href: '/iscrizione/', label: 'Iscrizione' },
	{ href: '/capi/', label: 'Calendario' },
] as const;

export const FOOTER_LINKS = [
	{ href: '/privacy/', label: 'Privacy' },
	{ href: '/informativa-sulla-privacy/', label: 'Informativa sulla privacy' },
	{ href: '/termini-e-condizioni/', label: 'Termini e condizioni' },
	{ href: '/uso-di-immagini/', label: 'Uso di immagini' },
] as const;
