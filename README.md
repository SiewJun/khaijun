# Khai Jun's Portfolio

A modern, responsive portfolio website built with Vue.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Sections**:
  - Home: Professional introduction and overview
  - Work: Detailed work experience and featured projects
  - Career: Education, certifications, skills, and career timeline
  - Contact: Contact information and functional contact form
- **Navigation**: Floating navigation bar with active states
- **Dark/Light Mode Ready**: Built with CSS variables for easy theme switching
- **Performance Optimized**: Fast loading with modern build tools

## Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for rapid UI development
- **Icons**: Lucide Vue Next for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds
- **Components**: Reka UI for accessible, customizable components

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd khaijun
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm run test:unit
npm run test:e2e
```

### Linting and Formatting

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
├── components/
│   ├── nav-bar.vue          # Navigation component
│   ├── theme-toggle.vue     # Theme switcher
│   └── ui/                  # Reusable UI components
├── views/
│   ├── HomeView.vue         # Landing page
│   ├── WorkView.vue         # Work experience & projects
│   ├── CareerView.vue       # Education & career timeline
│   └── ContactView.vue      # Contact form & information
├── router/
│   └── index.ts            # Route definitions
├── stores/
│   ├── counter.ts          # Example store
│   └── theme.ts            # Theme management
└── assets/
    └── main.css            # Global styles
```

## Customization

### Personal Information

Update the personal information in the following files:

- `src/views/HomeView.vue` - Hero section and introduction
- `src/views/WorkView.vue` - Work experience and projects
- `src/views/CareerView.vue` - Education and career details
- `src/views/ContactView.vue` - Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors and themes in `tailwind.config.js`
- Global styles in `src/assets/main.css`
- Component-specific styles in individual `.vue` files

### Components

All UI components are built using Reka UI and can be customized in the `src/components/ui/` directory.

## Deployment

This project can be deployed to any static hosting service:

### Vercel

```bash
npm run build
# Deploy the dist/ folder
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out through the contact form on the website or via email at hello@khaijun.dev.
