// Simulation of a fetch that revalidates every 8 hours (28,800 seconds)
// I already prepared everything to use Google Places API in the future

export type Timetable = {
	day: string;
	hours: string;
	isToday: boolean;
};

const DAYS_IT = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

export async function getTimetables (): Promise<Timetable[]> {
	// Base timetables
	const baseHours = [
		{ day: 'Lunedì', hours: '12:00–14:30, 18:30–22:30' },
		{ day: 'Martedì', hours: '12:00–14:30, 18:30–22:30' },
		{ day: 'Mercoledì', hours: 'Chiuso' },
		{ day: 'Giovedì', hours: '12:00–14:30, 18:30–22:30' },
		{ day: 'Venerdì', hours: '12:00–14:30, 18:30–22:30' },
		{ day: 'Sabato', hours: '12:00–14:30, 18:30–23:00' },
		{ day: 'Domenica', hours: '12:00–14:30, 18:30–23:00' },
	];

	const todayIndex = new Date().getDay(); // 0 is Sunday
	const todayName = DAYS_IT[todayIndex];

	return baseHours.map(h => ({
		...h,
		isToday: h.day === todayName,
	}));
}
