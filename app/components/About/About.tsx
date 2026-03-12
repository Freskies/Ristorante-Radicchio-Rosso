import Image from 'next/image';

export default function About () {
	return <section id="chi-siamo" className="py-24 bg-zinc-900 text-white overflow-hidden">
		<div className="container mx-auto px-4">
			<div className="flex flex-col lg:flex-row items-center gap-16">
				<div className="lg:w-1/2 relative">
					<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-zinc-800">
						<Image
							src="/gallery/34.jpg"
							alt="Ristorante Radicchio Rosso Esterno"
							width={600}
							height={800}
							className="w-full h-auto object-cover"
						/>
					</div>
					{/* Decorative element */}
					<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0"></div>
					<div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
				</div>

				<div className="lg:w-1/2">
					<h2 className="text-accent font-bold tracking-widest uppercase mb-4">Chi siamo</h2>
					<h3 className="text-4xl md:text-5xl font-bold mb-8">Tradizione e Innovazione</h3>

					<div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
						<p>
							Tra mare e campagna, a 3 km dal centro di Ravenna si trova il ristorante pizzeria <span
							className="text-white font-semibold">Radicchio Rosso</span>.
							Casolare del 1700, aperto ufficialmente dal 1990 e dal 2008 gestito dalla famiglia Marchiani.
						</p>
						<p>
							Una certezza nel campo della ristorazione da ormai 40 anni, la famiglia Marchiani insieme ai suoi
							collaboratori si impegna quotidianamente nel garantire ai suoi clienti nuovi sapori unendoli all
							insuperabile cucina tradizionale romagnola della nonna.
						</p>
						<p>
							Materie prime scelte seguendo la qualità, prodotti sia di carne che di pesce, selezionati per
							deliziare il palato di ogni cliente che decide di entrare nella loro casa.
						</p>
						<p>
							La pizza è cotta in forno a legna, come una volta, fatta con farine scelte e una ricetta creata
							appositamente per renderla leggera e altamente digeribile.
						</p>
						<p className="bg-white/5 p-4 rounded-lg border-l-4 border-accent">
							Dal 2022 il Radicchio Rosso è l’unico ristorante a fare la <span
							className="text-accent font-bold">scrocchiarella</span>, una pizza innovativa, croccante, leggera
							e ancora più digeribile.
						</p>
						<p className="italic">
							Saremo lieti di ospitarvi, proponendovi i nostri piatti e un buon calice di vino. Con la speranza
							di farvi sentire sempre a casa.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>;
}
