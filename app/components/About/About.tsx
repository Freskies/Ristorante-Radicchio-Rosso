export default function About () {
	return <section id="chi-siamo" aria-labelledby="about-title"
	                className="py-12 bg-white text-zinc-900 overflow-hidden text-center">
		<div className="container mx-auto px-4 max-w-4xl">
			<div>
				<h2 id="about-title" className="text-accent font-bold tracking-widest uppercase mb-4">Chi siamo</h2>
				<h3 className="text-4xl md:text-5xl font-bold mb-8">Tradizione e Innovazione</h3>

				<div className="space-y-6 text-zinc-600 text-lg leading-relaxed text-left max-w-3xl mx-auto">
					<p>
						Tra mare e campagna, a 3 km dal centro di Ravenna si trova il ristorante pizzeria <span
						className="text-zinc-900 font-semibold">Radicchio Rosso</span>.
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
					<p className="bg-zinc-50 p-6 rounded-2xl border-l-4 border-accent shadow-sm">
						Dal 2022 il Radicchio Rosso è l’unico ristorante a fare la <span
						className="text-accent font-bold">scrocchiarella</span>, una pizza innovativa, croccante, leggera
						e ancora più digeribile.
					</p>
					<p className="italic text-center pt-4">
						Saremo lieti di ospitarvi, proponendovi i nostri piatti e un buon calice di vino. Con la speranza
						di farvi sentire sempre a casa.
					</p>
				</div>
			</div>
		</div>
	</section>;
}
