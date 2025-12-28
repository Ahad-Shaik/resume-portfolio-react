# My Resume Portfolio

A modern, responsive React portfolio website showcasing your resume, experience, skills, projects, and contact information.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Built with React and Vite for fast development
- 🎯 Smooth scrolling navigation
- 💼 Experience timeline
- 🛠️ Skills showcase with progress bars
- 📂 Projects portfolio
- 📧 Contact form

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **SCSS** - Styling with Sass preprocessor
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd My-Resume-Rect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
My-Resume-Rect/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Header.scss
│   │   ├── About.jsx           # About section
│   │   ├── About.scss
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Experience.scss
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Skills.scss
│   │   ├── Projects.jsx        # Projects portfolio
│   │   ├── Projects.scss
│   │   ├── Contact.jsx        # Contact form
│   │   └── Contact.scss
│   ├── App.jsx                 # Main app component
│   ├── App.scss
│   ├── main.jsx                # Entry point
│   └── index.scss              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Your Information

1. **About Section** (`src/components/About.jsx`):
   - Update the description text
   - Modify statistics (projects, years, technologies)
   - Add your photo (replace the placeholder)

2. **Experience** (`src/components/Experience.jsx`):
   - Update the `experiences` array with your work history

3. **Skills** (`src/components/Skills.jsx`):
   - Modify the `skillCategories` array with your skills and proficiency levels

4. **Projects** (`src/components/Projects.jsx`):
   - Update the `projects` array with your portfolio projects
   - Add GitHub and demo links

5. **Contact** (`src/components/Contact.jsx`):
   - Update email and phone number
   - Add your social media links
   - Configure form submission (currently shows an alert)

### Styling

All styles are written in SCSS. You can customize colors, fonts, and spacing by modifying the CSS variables in `src/index.scss`:

```scss
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-color: #1f2937;
  // ... more variables
}
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

