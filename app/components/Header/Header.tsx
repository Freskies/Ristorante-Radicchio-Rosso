'use client';
import Image from 'next/image';
import Link from 'next/link';

const logo_size = 60;

export default function Header ({ openMenuAction }: { openMenuAction: () => void }) {
	const navItems = [
		{ name: 'Chi Siamo', href: '#chi-siamo' },
		{ name: 'Menu', onClick: openMenuAction },
		{ name: 'Gallery', href: '#gallery' },
		{ name: 'Info', href: '#info' },
	];

	// noinspection HtmlUnknownAnchorTarget
	return <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
		<div className="container mx-auto px-4 h-20 flex items-center justify-between">
			<Link href="/" className="flex items-center">
				<Image
					src="/radicchio-rosso-logo.png"
					alt="Radicchio Rosso Logo"
					width={logo_size}
					height={logo_size}
					className="w-12 md:w-16 h-auto"
					style={{ height: 'auto' }}
				/>
				<span className="ml-2 text-xl font-bold text-accent hidden sm:block">Radicchio Rosso</span>
			</Link>

			<nav className="hidden md:flex space-x-8">
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
							className="text-zinc-700 hover:text-accent font-medium transition-colors"
						>
							{item.name}
						</Link>
					)
				))}
			</nav>

			{/* Mobile Menu Trigger - simple for now, can be improved */}
			<div className="md:hidden flex space-x-4">
				{navItems.slice(0, 2).map((item) => (
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
							className="text-zinc-700 text-sm font-medium"
						>
							{item.name}
						</Link>
					)
				))}
				<Link href="#info" className="text-zinc-700 text-sm font-medium">Info</Link>
			</div>
		</div>
	</header>;
}
