'use client';

import { useEffect, useState } from 'react';
import { getTimetables, Timetable } from './timetable';
import TimetableSection from './TimetableSection';

export default function Info () {
	const [timetables, setTimetables] = useState<Timetable[]>([]);
	const [showMap, setShowMap] = useState(false);

	useEffect(() => {
		getTimetables().then(setTimetables);
	}, []);

	// Address and contacts
	const telephone = "0544 432288";
	const mobilePhone = "339 2265569";
	const email = "info@radicchiorosso.it";
	const address = "Via Stradone, 74 Ravenna (RA) 48121";

	// Google Maps embed URL
	const mapUrl = "https://maps.app.goo.gl/R1RwqxAA4YgiewvE6";
	// noinspection LongLine
	const mapUrlEmbed = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.1380222001953!2d12.227966276660235!3d44.409813403167405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477df97bb5e87bab%3A0xaa7894b37855ad07!2sRadicchio%20Rosso%20Ristorante%20Pizzeria!5e0!3m2!1sen!2sit!4v1773308547952!5m2!1sen!2sit`;

	// noinspection LongLine
	return <section id="info" aria-labelledby="info-title" className="py-24 bg-zinc-50">
		<div className="container mx-auto px-4">
			<h2
				id="info-title"
				className="text-4xl md:text-5xl font-bold mb-16 text-center text-zinc-900 border-b-4
				border-accent inline-block mx-auto">
				Info & Orari
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Left side: Contacts and Timetables */}
				<div className="space-y-8">
					<div className="bg-white p-8 rounded-2xl shadow-md">
						<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
							<svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
							</svg>
							Contatti
						</h3>
						<div className="space-y-4 text-lg">
							<p>
								<span className="font-semibold">Tel:</span>{" "}
								<a href={`tel:${telephone.replace(/\s/g, '')}`}
								   className="hover:text-accent underline">{telephone}</a>
							</p>
							<p>
								<span className="font-semibold">Cell:</span>{" "}
								<a href={`tel:${mobilePhone.replace(/\s/g, '')}`}
								   className="hover:text-accent underline">{mobilePhone}</a>
							</p>
							<p>
								<span className="font-semibold">Email:</span>{" "}
								<a href={`mailto:${email}`} className="hover:text-accent underline">{email}</a>
							</p>
							<p>
								<span className="font-semibold">Dove:</span>{" "}
								<a href={mapUrl} target="_blank" className="hover:text-accent underline">{address}</a>
							</p>
						</div>
					</div>

					<TimetableSection timetables={timetables}/>
				</div>

				{/* Right side: Map */}
				<div
					className="h-100 lg:h-full min-h-100 bg-white p-2 rounded-2xl shadow-md relative group overflow-hidden">
					{showMap ? (
						<iframe
							title="Mappa del Ristorante Radicchio Rosso"
							src={mapUrlEmbed}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-xl"
						/>
					) : (
						<button
							className="w-full h-full bg-zinc-100 rounded-xl flex flex-col items-center justify-center text-center p-8 transition-colors hover:bg-zinc-200 cursor-pointer"
							onClick={() => setShowMap(true)}
							aria-label="Carica la mappa interattiva"
						>
							<div
								className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
								<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
								</svg>
							</div>
							<h4 className="text-xl font-bold text-zinc-900 mb-2">Visualizza la Mappa</h4>
							<p className="text-zinc-600 mb-6 max-w-xs">
								Cliccando caricherai la mappa interattiva di Google Maps.
							</p>
							<span
								className="bg-accent text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:brightness-110 transition-all shadow-md"
							>
								Carica Mappa
							</span>
						</button>
					)}
				</div>
			</div>
		</div>
	</section>;
}
