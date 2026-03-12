# Radicchio Rosso Website

This is a one-page website for the **Radicchio Rosso** Restaurant & Pizzeria in Ravenna.

## Project Overview

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: English (Development files, README), Italian (Client-facing content)
- **Design**: Mobile-first, Responsive

## Features

- **Single Page Application**: Smooth scrolling between sections.
- **Hero Section**: Promotional area with background image.
- **Menu**: Grid display of the restaurant's menu images.
- **Gallery**: Mosaic-style gallery of the restaurant and its dishes.
- **About Section**: Detailed history and description of the restaurant.
- **Info & Timetables**:
    - Real-time contact information.
    - Dynamic timetable displaying today's hours prominently.
    - 8-hour revalidation logic for timetable data (simulated).
    - Interactive Google Maps integration.
- **SEO Optimized**: Semantic HTML, proper metadata (title, description, keywords, OpenGraph).
- **Social Integration**: Icons and links to Facebook, Instagram, and TripAdvisor.

## Project Structure

```text
app/
  components/
    About/      - "Chi siamo" section
    Footer/     - Footer with social links and copyright
    Gallery/    - Image gallery mosaic
    Header/     - Sticky navigation and logo
    Hero/       - Promotional top section
    Info/       - Contacts, Map, and Timetable logic
    Menu/       - Menu images display
    UI/         - Shared UI components
  layout.tsx    - Root layout with SEO metadata
  page.tsx      - Main entry point (one-page structure)
public/
  gallery/      - Restaurant photos
  menu/         - Menu images
  radicchio-rosso-logo.png - Main logo
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

