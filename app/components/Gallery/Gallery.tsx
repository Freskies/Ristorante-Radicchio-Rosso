'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";

const allImages = Array.from({ length: 21 }, (_, i) => ({
	src: `/gallery/${20 + i}.jpg`,
	alt: `Radicchio Rosso Gallery Image ${20 + i}`,
}));

const lg = 1024;
const md = 768;
const quality = 60;

function getImagesByWidth (width: number) {
	const columns = width >= lg ? 4 : width >= md ? 3 : 2;
	return allImages.slice(0, allImages.length - (() => {
		switch (columns) {
			case 2:
				return 1;
			case 3:
				return 0;
			case 4:
				return 2;
			default:
				return 0;
		}
	})())
}

export default function Gallery () {
	const [visibleImages, setVisibleImages] = useState(allImages);
	const [mounted, setMounted] = useState(false);
	const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

	useEffect(() => {
		function onResize () {
			const width = window.innerWidth;
			const newVisibleImages = getImagesByWidth(width);
			setVisibleImages(newVisibleImages);
			setMounted(true);
		}

		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return <section id="gallery" aria-labelledby="gallery-title" className="pb-24 bg-white">
		<div className="container mx-auto px-4">
			<div className="text-center mb-16">
				<h2
					id="gallery-title"
					className="pt-2 text-4xl md:text-5xl font-bold mb-4 text-zinc-900 border-b-4 border-accent inline-block">
					Gallery
				</h2>
				<p className="text-zinc-600">Un viaggio visivo attraverso i nostri piatti e la nostra location.</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense">
				{mounted && visibleImages.map((image, index) => (
					<div
						key={index}
						className={`relative overflow-hidden rounded-lg shadow-md group cursor-pointer ${
							index % 7 === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
						} ${(loadedImages[index] ? 'bg-transparent' : 'bg-zinc-200 animate-pulse')}`}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className={`object-cover transition-all duration-500 group-hover:scale-110 ${
								loadedImages[index] ? 'opacity-100' : 'opacity-0'
							}`}
							sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
							priority={image.src === '/gallery/27.jpg'}
							onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
							quality={quality}
						/>
						<div
							className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300"/>
					</div>
				))}
			</div>
		</div>
	</section>;
}
