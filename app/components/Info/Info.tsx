import { getTimetables } from './timetable';
import TimetableSection from './TimetableSection';

export default async function Info () {
	const timetables = await getTimetables();

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
	return <section id="info" className="py-24 bg-zinc-50">
		<div className="container mx-auto px-4">
			<h2
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
								   className="hover:text-accent">{telephone}</a>
							</p>
							<p>
								<span className="font-semibold">Cell:</span>{" "}
								<a href={`tel:${mobilePhone.replace(/\s/g, '')}`}
								   className="hover:text-accent">{mobilePhone}</a>
							</p>
							<p>
								<span className="font-semibold">Email:</span>{" "}
								<a href={`mailto:${email}`} className="hover:text-accent">{email}</a>
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
				<div className="h-100 lg:h-full min-h-100 bg-white p-2 rounded-2xl shadow-md">
					<iframe
						src={mapUrlEmbed}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="rounded-xl"
					/>
				</div>
			</div>
		</div>
	</section>;
}
