'use client';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToSection } from '@/app/utils/scroll';

const logo_size = 60;

export default function Header () {
	interface NavItem {
		name: string;
		href?: string;
		onClick?: () => void;
	}

	const navItems: NavItem[] = [
		{ name: 'Chi Siamo', href: '#chi-siamo' },
		{ name: 'Gallery', href: '#gallery' },
		{ name: 'Info', href: '#info' },
	];

	// noinspection HtmlUnknownAnchorTarget
	return <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
		<div className="container mx-auto px-4 h-20 flex items-center justify-between">
			<Link
				href="#hero"
				className="flex items-center cursor-pointer"
				onClick={(e) => scrollToSection(e, 'hero')}
			>
				<Image
					src="/radicchio-rosso-logo.png"
					alt="Radicchio Rosso Logo"
					width={logo_size}
					height={logo_size}
					className="w-15 h-12.5"
					priority
				/>
				<span className="ml-2 text-xl font-bold text-accent hidden sm:block">Radicchio Rosso</span>
			</Link>

			<nav className="hidden md:flex space-x-8" aria-label="Navigazione principale">
				{navItems.map((item) => (
					item.onClick ? (
						<button
							key={item.name}
							onClick={item.onClick}
							className="text-zinc-700 hover:text-accent font-medium transition-colors cursor-pointer"
						>
							{item.name}
						</button>
					) : (
						<Link
							key={item.name}
							href={item.href || '#'}
							className="text-zinc-700 hover:text-accent font-medium transition-colors cursor-pointer"
							onClick={(e) => item.href && scrollToSection(e, item.href)}
						>
							{item.name}
						</Link>
					)
				))}
			</nav>

			{/* Mobile Menu Trigger - simple for now, can be improved */}
			<nav className="md:hidden flex space-x-4" aria-label="Navigazione mobile">
				{navItems.map((item) => (
					item.onClick ? (
						<button
							key={item.name}
							onClick={item.onClick}
							className="text-zinc-700 text-sm font-medium cursor-pointer"
						>
							{item.name}
						</button>
					) : (
						<Link
							key={item.name}
							href={item.href || '#'}
							className="text-zinc-700 text-sm font-medium cursor-pointer"
							onClick={(e) => item.href && scrollToSection(e, item.href)}
						>
							{item.name}
						</Link>
					)
				))}
			</nav>
		</div>
	</header>;
}
