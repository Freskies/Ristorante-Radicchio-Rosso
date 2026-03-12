'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface MenuImage {
	src: string;
	alt: string;
}

export default function MenuCarousel ({ images }: { images: MenuImage[] }) {
	const [index, setIndex] = useState(-1);

	return <>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{images.map((image, i) => (
				<div
					key={i}
					className="group relative overflow-hidden rounded-xl shadow-lg bg-white transition-transform
					hover:-translate-y-2 cursor-pointer"
					onClick={() => setIndex(i)}
				>
					<div className="relative aspect-3/4 w-full">
						<Image
							src={image.src}
							alt={image.alt}
							fill
							priority
							className="object-cover object-top transition-all group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						/>
					</div>
					<div
						className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors
						flex items-center justify-center">
						<div className="opacity-0 group-hover:opacity-100 transition-opacity">
							<button
								className="bg-white text-zinc-900 px-4 py-2 rounded-full font-semibold pointer-events-none">
								Ingrandisci
							</button>
						</div>
					</div>
				</div>
			))}
		</div>

		<Lightbox
			index={index}
			open={index >= 0}
			close={() => setIndex(-1)}
			slides={images.map(img => ({ src: img.src, alt: img.alt }))}
			plugins={[Zoom]}
			controller={{ closeOnBackdropClick: true }}
			zoom={{
				maxZoomPixelRatio: 3,
				zoomInMultiplier: 2,
				doubleTapDelay: 300,
				doubleClickDelay: 300,
				doubleClickMaxStops: 2,
				keyboardMoveDistance: 50,
				wheelZoomDistanceFactor: 100,
				pinchZoomDistanceFactor: 100,
				scrollToZoom: true
			}}
		/>
	</>;
}
