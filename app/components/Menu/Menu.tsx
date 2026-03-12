import MenuCarousel from './MenuCarousel';

export default function Menu () {
	const menuImages = [
		{ src: '/menu/menu1.jpg', alt: 'Menù Radicchio Rosso 1' },
		{ src: '/menu/menu2.jpg', alt: 'Menù Radicchio Rosso 2' },
		{ src: '/menu/menu3.jpg', alt: 'Menù Radicchio Rosso 3' },
		{ src: '/menu/menu4.jpg', alt: 'Menù Radicchio Rosso 4' },
		{ src: '/menu/menu5.jpg', alt: 'Menù Radicchio Rosso 5' },
	];

	return <section id="menu" className="py-24 bg-zinc-50">
		<div className="container mx-auto px-4 text-center">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 text-zinc-900 border-b-4 border-accent inline-block">
				Il Nostro Menù
			</h2>

			<MenuCarousel images={menuImages}/>

			<p className="mt-12 text-zinc-600 max-w-2xl mx-auto">
				I nostri menù variano periodicamente per garantirvi sempre la massima freschezza dei prodotti stagionali.
				La pizza è cotta in forno a legna.
			</p>
		</div>
	</section>;
}
