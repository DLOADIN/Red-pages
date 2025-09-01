# Rico Distribution International Website

A modern React + Vite website for Rico Distribution International, showcasing their products, partners, and services.

## Features

- **Modern React + Vite Setup**: Fast development and build times
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Responsive Design**: Mobile-first approach
- **Component Library**: Built with Radix UI components

## Pages

- **Home**: Landing page with hero section, product categories, and company overview
- **About**: Company history, impact statistics, and partner showcase
- **Products**: Product portfolio with filtering and brand showcase
- **Contact**: Contact form and company information

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rico-distribution-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, etc.)
│   └── Layout.tsx      # Main layout component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Products.tsx    # Products page
│   └── Contact.tsx     # Contact page
├── lib/                # Utility functions
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Radix UI** - Accessible UI components
- **Lucide React** - Icons

## Deployment

The project is configured for easy deployment to various platforms:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory

3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to Rico Distribution International.
