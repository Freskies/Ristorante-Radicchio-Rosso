'use client';
import Image from 'next/image';
import { useState } from 'react';

const quality = 60;

export default function Hero ({ openMenuAction }: { openMenuAction: () => void }) {
	const [isLoaded, setIsLoaded] = useState(false);

	// noinspection HtmlUnknownAnchorTarget,LongLine
	return <section
		id="hero"
		aria-label="Introduzione"
		className="relative min-h-125 sm:min-h-150 h-dvh w-full flex items-center justify-center overflow-hidden pt-12 sm:pt-20">
		{/* Background Image/Promotion */}
		<div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 bg-zinc-900'}`}>
			<Image
				src="/hero_landscape.jpg" // Using one of the gallery photos as a placeholder background
				alt="Radicchio Rosso Atmosfera"
				fill
				className="object-cover brightness-[0.4]"
				priority
				quality={quality}
				onLoad={() => setIsLoaded(true)}
			/>
		</div>

		<div className="container relative z-10 px-4 text-center text-white">
			<h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight inline-block text-left">
				<span className="text-accent">R</span>istorante<br/><span className="inline-block ml-16"><span
				className="text-accent">R</span>adicchio</span><br/><span className="inline-block ml-8"><span
				className="text-accent">R</span>osso</span>
			</h1>
			<p className="text-xl md:text-2xl mb-8 font-light italic text-balance px-5">
				Tradizione e Innovazione tra mare e campagna
			</p>

			<div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
				<button
					onClick={openMenuAction}
					className="cursor-pointer inline-block bg-white text-accent px-8 py-3 rounded-full font-bold uppercase
					transition-all hover:bg-zinc-200 active:scale-95 shadow-lg"
				>
					Scopri il Menù
				</button>
				<a
					href="#info"
					className="inline-block bg-white text-accent px-8 py-3 rounded-full font-bold uppercase
					transition-all hover:bg-zinc-200 active:scale-95 shadow-lg"
				>
					Prenota Ora
				</a>
			</div>

		</div>

		<div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
			<a href="#chi-siamo" aria-label="Scorri verso il basso">
				<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
				</svg>
			</a>
		</div>
	</section>;
}
