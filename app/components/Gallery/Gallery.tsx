import Image from 'next/image';

export default function Gallery () {
	const images = Array.from({ length: 19 }, (_, i) => ({
		src: `/gallery/${20 + i}.jpg`,
		alt: `Radicchio Rosso Gallery Image ${20 + i}`,
	}));

	return <section id="gallery" className="py-24 bg-white">
		<div className="container mx-auto px-4">
			<div className="text-center mb-16">
				<h2
					className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 border-b-4 border-accent inline-block">
					Gallery
				</h2>
				<p className="text-zinc-600">Un viaggio visivo attraverso i nostri piatti e la nostra location.</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className={`relative overflow-hidden rounded-lg shadow-md group ${
							index % 7 === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
						}`}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-110"
							sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
						/>
						<div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300"/>
					</div>
				))}
			</div>
		</div>
	</section>;
}
