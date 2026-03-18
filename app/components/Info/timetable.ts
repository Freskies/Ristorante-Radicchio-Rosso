'use server';

const PLACE_ID = "ChIJq3votXv5fUcRB61VeLOUeKo";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export type Timetable = {
	day: string;
	hours: string;
};

const base_timetables = [
	{ day: 'lunedì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'martedì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'mercoledì', hours: '19:00–22:30' },
	{ day: 'giovedì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'venerdì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'sabato', hours: '12:00–14:30, 19:00–23:00' },
	{ day: 'domenica', hours: '12:00–14:30, 19:00–22:30' },
];

export async function getTimetables (): Promise<Timetable[]> {
	if (!API_KEY) {
		console.warn("GOOGLE_PLACES_API_KEY not found, using base_timetables");
		return base_timetables;
	}

	try {
		// noinspection LongLine
		const response = await fetch(
			`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=it`,
			{
				headers: {
					'Content-Type': 'application/json',
					'X-Goog-Api-Key': API_KEY,
					'X-Goog-FieldMask': 'regularOpeningHours.weekdayDescriptions'
				},
				next: { revalidate: 28800 } // Revalidate every 8 hours
			}
		);

		const data = await response.json();

		if (!data.regularOpeningHours?.weekdayDescriptions) {
			console.error("Google Places API error or no opening hours:",
				data.error?.message || "Missing regularOpeningHours");
			return base_timetables;
		}

		// Google's weekdayDescriptions format: "Lunedì: 12:00–14:30, 19:00–22:30"
		return data.regularOpeningHours.weekdayDescriptions.map((text: string) => {
			const [day, ...rest] = text.split(': ');
			return {
				day: day.trim(),
				hours: rest.join(': ').trim()
			};
		});
	} catch (error) {
		console.error("Failed to fetch from Google Places API:", error);
		return base_timetables;
	}
}
