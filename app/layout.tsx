// noinspection LongLine

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://radicchiorosso.it"),
	title: "Ristorante Radicchio Rosso - Ravenna",
	description: "Ristorante Pizzeria Radicchio Rosso a Ravenna. Cucina tradizionale romagnola, pizza al forno a legna e la speciale scrocchiarella. Da 40 anni passione e qualità.",
	keywords: ["ristorante ravenna", "pizzeria ravenna", "cucina romagnola", "scrocchiarella ravenna", "radicchio rosso ravenna"],
	openGraph: {
		title: "Ristorante Radicchio Rosso - Ravenna",
		description: "Cucina tradizionale romagnola e pizza al forno a legna a due passi dal centro di Ravenna.",
		url: "https://radicchiorosso.it",
		siteName: "Radicchio Rosso",
		images: [
			{
				url: "/radicchio-rosso-logo.png",
				width: 800,
				height: 600,
			},
		],
		locale: "it_IT",
		type: "website",
	},
};

export default function RootLayout ({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return <html lang="it">
	<head>
		<script
			dangerouslySetInnerHTML={{
				__html: `
					if (window.trustedTypes && window.trustedTypes.createPolicy) {
						window.trustedTypes.createPolicy('default', {
							createHTML: (string) => string,
							createScriptURL: (string) => string,
							createScript: (string) => string,
						});
					}
				`,
			}}
		/>
		<title>Radicchio Rosso</title>
	</head>
	<body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`} suppressHydrationWarning>
	{children}
	<Analytics />
	<SpeedInsights />
	</body>
	</html>;
}
