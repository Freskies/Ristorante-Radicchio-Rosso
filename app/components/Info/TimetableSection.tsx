'use client';
import { useState } from 'react';
import { Timetable } from './timetable';

export default function TimetableSection ({ timetables }: { timetables: Timetable[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const currentTimetables = timetables;

	return <div className="bg-white p-8 rounded-2xl shadow-md">
		<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
			<svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
				      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
			</svg>
			Orari di Apertura
		</h3>

		{/* Today highlighted */}
		<div className="bg-accent/5 p-4 rounded-xl border border-accent/10 mb-6">
			<p className="text-accent font-bold flex justify-between">
				<span>Oggi ({currentTimetables.find(t => t.isToday)?.day}):</span>
				<span>{currentTimetables.find(t => t.isToday)?.hours}</span>
			</p>
		</div>

		{/* Other days */}
		<div>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="cursor-pointer list-none text-accent font-semibold flex items-center gap-2
				focus:outline-none w-full"
			>
				<span>Vedi orari settimanali</span>
				<svg
					className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
				</svg>
			</button>

			<div
				className={`grid transition-all duration-300 ease-in-out
				${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
				<div className="min-h-0 overflow-hidden space-y-2 text-zinc-600">
					{currentTimetables.map((t) => (
						<p key={t.day}
						   className={`flex justify-between ${t.isToday ? 'font-bold text-accent' : ''}`}>
							<span>{t.day}</span>
							<span>{t.hours}</span>
						</p>
					))}
				</div>
			</div>
		</div>
	</div>;
}
