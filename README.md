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

## Key Details That Matter

This project goes beyond just a landing page, focusing on professional-grade quality in areas often overlooked:

- **Accessibility First**: Fully navigable via keyboard. Implements ARIA roles, focus trapping in modals, and logical tab orders to ensure everyone, including assistive technology users, can access the menu and info.
- **Hardened Security**: A robust Content Security Policy (CSP) with Trusted Types, COOP, and XFO headers protects against XSS and clickjacking.
- **Performance & UX**: Optimized image delivery with Next.js, smooth animations, and smart timetable logic that highlights the current day's hours automatically.
- **Privacy Conscious**: Strict Referrer-Policy and Permissions-Policy to minimize data exposure and respect browser privacy.

