'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

const Gallery = dynamic(() => import('./components/Gallery/Gallery'), {
	loading: () => <div className="h-96 flex items-center justify-center bg-white">Loading Gallery...</div>,
	ssr: false
});

const MenuModal = dynamic(() => import('./components/Menu/MenuModal'), {
	ssr: false
});

export default function Home () {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const openMenuAction = () => setIsMenuOpen(true);

	return <div className="min-h-dvh bg-white">
		<Header openMenuAction={openMenuAction}/>
		<main>
			<Hero openMenuAction={openMenuAction}/>
			<About/>
			<Gallery/>
			<Info/>
		</main>
		<Footer/>
		<MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
	</div>;
}
