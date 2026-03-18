import React from 'react';

const iconMap: Record<string, string> = {
	'meat': 'CARNE.svg',
	'fish': 'PESCE.svg',
	'pizza': 'PIZZA.svg',
	'dessert': 'DOLCI.svg',
	'children': 'BAMBINI.svg',
	'drinks': 'BEVANDE.svg',
};

export const MenuIcon = ({ type, active }: { type: string; active: boolean }) => {
	const color = active ? 'bg-accent' : 'bg-zinc-400';
	const fileName = iconMap[type];

	if (!fileName) return null;

	return <div
		className={`w-[2em] h-[2em] shrink-0 ${color}`}
		aria-hidden="true"
		style={{
			maskImage: `url(/menu_tabs/${fileName})`,
			maskRepeat: 'no-repeat',
			maskPosition: 'center',
			maskSize: 'contain',
			WebkitMaskImage: `url(/menu_tabs/${fileName})`,
			WebkitMaskRepeat: 'no-repeat',
			WebkitMaskPosition: 'center',
			WebkitMaskSize: 'contain',
		}}
	/>
};
