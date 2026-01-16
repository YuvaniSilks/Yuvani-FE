# Yuvani Silks - Website

## Overview
A beautiful, responsive website for Yuvani Silks, a premium Banaras silk saree shop located in Adyar, Chennai. The website showcases their collection of silk sarees, designer kurtis, and daily wear for women.

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Header.tsx       - Navigation bar with logo
│   │   ├── Hero.tsx         - Hero section with branding
│   │   ├── Collections.tsx  - Product collections showcase
│   │   ├── WhyChooseUs.tsx  - Features and benefits
│   │   ├── Gallery.tsx      - Featured collections gallery with images
│   │   ├── Contact.tsx      - Contact info, location, call & WhatsApp
│   │   └── Footer.tsx       - Footer with links and info
│   ├── theme/
│   │   └── theme.ts         - MUI theme configuration
│   ├── App.tsx              - Main app component
│   ├── main.tsx             - App entry point
│   └── index.css            - Global styles
├── attached_assets/
│   ├── image_1768495771414.png  - Shop logo
│   └── stock_images/            - Gallery images
├── index.html               - HTML template
├── vite.config.ts           - Vite configuration
├── tsconfig.json            - TypeScript configuration
└── package.json             - Dependencies
```

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Material UI (MUI) for components
- Google Fonts (Cormorant Garamond + Poppins)

## Store Information
- **Name**: Yuvani Silks
- **Tagline**: Crafted in Banaras
- **Location**: Kamaraj Ave 2nd St, near Poppat Jamal, Venkata Rathnam Nagar Extension, Venkata Rathinam Nagar, Adyar, Chennai, Tamil Nadu 600020
- **Products**: Premium Banaras silk sarees, designer kurtis, daily wear for women

## Color Scheme
- Primary: #8B0000 (Deep Red/Maroon)
- Secondary: #D4AF37 (Gold)
- Background: #FFFAF0 (Floral White)

## Running the Project
```bash
npm run dev
```

## Building for Production
```bash
npm run build
```

## Notes
- The website is a single-page application with smooth scrolling navigation
- Responsive design works on all screen sizes
- Contact section includes call and WhatsApp buttons (phone number needs to be updated with actual number)
- Google Maps embed shows the store location
- Gallery section features elegant saree images
