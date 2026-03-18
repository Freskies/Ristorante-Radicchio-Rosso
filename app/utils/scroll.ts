export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
	e.preventDefault();
	const element = document.getElementById(id.replace('#', ''));
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
		// Optionally update history without hash if needed, 
		// but user specifically said "i don't like that it appears on the url"
		// so we just scroll and don't update hash.
	}
};
