# Radicchio Rosso Website

This is a one-page website for the **Radicchio Rosso** Restaurant & Pizzeria in Ravenna.

## Project Overview

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: English (Development files, README), Italian (Client-facing content)
- **Design**: Mobile-first, Responsive

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

