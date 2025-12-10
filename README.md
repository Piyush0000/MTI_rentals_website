# MTI Car Rental Clone

A car rental platform built with Next.js 14+, Tailwind CSS, and Shadcn/UI components.

## Features

- Responsive design with Tailwind CSS
- Server-side rendering with Next.js App Router
- API routes for car listings and authentication
- Reusable UI components with Shadcn/UI
- Mock data for demonstration purposes

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Deployment**: Vercel

## Folder Structure

```
my-next-app/
├── app/                  # App Router
│   ├── page.tsx          # Frontend (Home page)
│   ├── about/
│   │   └── page.tsx      # Frontend (About page)
│   ├── api/              # Backend (Serverless Functions)
│   │   ├── auth/
│   │   │   └── route.ts  # Endpoint: /api/auth
│   │   └── cars/         # Endpoint: /api/cars (GET fleet, POST booking)
│   │       └── route.ts
│   └── layout.tsx        # Shared layout
├── components/           # Reusable UI components
├── lib/                  # Shared utilities
│   ├── db.ts             # Database connection logic
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── package.json          # Single package.json
├── .env                  # Environment variables
└── vercel.json           # Vercel configuration
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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application is configured for deployment to Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com/docs)"# MTI_rentals_website" 
