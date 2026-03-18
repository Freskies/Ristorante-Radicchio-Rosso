import React from "react";

export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
	e.preventDefault();
	const element = document.getElementById(id.replace('#', ''));
	if (element) element.scrollIntoView({ behavior: 'smooth' });
};
