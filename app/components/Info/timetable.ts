'use server';
// Simulation of a fetch that revalidates every 8 hours (28,800 seconds)
// I already prepared everything to use Google Places API in the future

const PLACE_ID = "ChIJq3votXv5fUcRB61VeLOUeKo";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export type Timetable = {
	day: string;
	hours: string;
};

const base_timetables = [
	{ day: 'Lunedì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'Martedì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'Mercoledì', hours: '19:00–22:30' },
	{ day: 'Giovedì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'Venerdì', hours: '12:00–14:30, 19:00–22:30' },
	{ day: 'Sabato', hours: '12:00–14:30, 19:00–23:00' },
	{ day: 'Domenica', hours: '12:00–14:30, 19:00–22:30' },
];

export async function getTimetables (): Promise<Timetable[]> {
	if (!API_KEY) {
		console.warn("GOOGLE_PLACES_API_KEY not found, using base_timetables");
		return base_timetables;
	}

	try {
		// noinspection LongLine
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=opening_hours&key=${API_KEY}&language=it`,
			{ next: { revalidate: 28800 } } // Revalidate every 8 hours
		);

		const data = await response.json();

		if (data.status !== "OK" || !data.result?.opening_hours?.weekday_text) {
			console.error("Google Places API error or no opening hours:", data.status, data.error_message);
			return base_timetables;
		}

		// Google's weekday_text format: "Lunedì: 12:00–14:30, 19:00–22:30"
		return data.result.opening_hours.weekday_text.map((text: string) => {
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
