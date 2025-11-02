# Personal Portfolio Website

My personal portfolio website showcasing my projects, skills, and professional experience. Built with HTML5, CSS3, and JavaScript.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Pages Overview](#pages-overview)
- [Customization](#customization)

##  Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Hamburger menu for mobile devices with smooth animations
- **Project Carousel**: Image slider showcasing projects with keyboard and touch support
- **Form Validation**: Client-side validation for contact form with real-time feedback
- **Accessibility**: WCAG-compliant with proper ARIA labels, keyboard navigation, and semantic HTML
- **Modern UI/UX**: Clean design with smooth transitions and hover effects
- **Cross-browser Compatible**: Tested and optimized for all major browsers

## 🛠 Technologies Used

- **HTML5**: Semantic markup for better structure and SEO
- **CSS3**: 
  - Flexbox and Grid for layouts
  - CSS Variables for theming
  - Media queries for responsive design
  - Smooth transitions and animations
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - Event handling
  - Form validation
  - Carousel functionality

##  Project Structure

```
portfolio/
├── index.html          # Home page
├── about.html          # About Me page
├── projects.html       # Projects showcase
├── skills.html         # Skills page
├── contact.html        # Contact form
├── styles/
│   └── style.css       # Main stylesheet
├── scripts/
│   ├── main.js         # Navigation & general interactivity
│   ├── carousel.js     # Project carousel functionality
│   └── form.js         # Contact form validation
├── assets/
│   ├── images/         # Project images (add your own)
│   ├── fonts/          # Custom fonts (if needed)
│   └── icons/          # Icon files (if needed)
├── README.md           # This file
└── GAMEPLAN.md         # Detailed development gameplan
```

##  Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control)
- GitHub account (for repository hosting)
- Vercel account (for cloud deployment)

##  Local Development

### Option 1: Using a Local Server (Recommended)

1. **Using Python** (if installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js** (if installed):
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run server
   http-server -p 8000
   ```

3. **Using VS Code Live Server**:
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

4. **Using PHP** (if installed):
   ```bash
   php -S localhost:8000
   ```

### Option 2: Opening Directly in Browser

Simply double-click `index.html` to open it in your default browser. Note: Some features may not work properly without a local server.

### Accessing the Website

Once the server is running, open your browser and navigate to:
- `http://localhost:8000` or
- `http://127.0.0.1:8000`

## 📄 Pages Overview

### Home (`index.html`)
- Brief introduction
- Navigation to all pages
- Featured projects preview
- Quick links to other sections

### About Me (`about.html`)
- Personal background
- Education history
- Interests and hobbies

### Projects (`projects.html`)
- Interactive carousel showcasing 3+ projects
- Project descriptions and technologies used
- Links to live demos and GitHub repositories
- Grid view of all projects

### Skills (`skills.html`)
- Programming languages with proficiency levels
- Frameworks and libraries
- Tools and technologies
- Soft skills

### Contact (`contact.html`)
- Contact information
- Contact form with validation
- Social media links

##  Customization


### Changing Colors

Edit CSS variables in `styles/style.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Main color */
    --secondary-color: #3498db;   /* Accent color */
    --accent-color: #e74c3c;      /* Highlight color */
    /* ... other variables */
}
```

### Adding Images

1. Place images in `assets/images/` folder
2. Update image sources in HTML:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```
3. Remember to add descriptive `alt` attributes for accessibility

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Select root directory (`/`)
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Vercel

1. Sign up at [vercel.com](https://vercel.com) with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Leave build settings as default (no build needed for static site)
5. Click "Deploy"
6. Your site will be live at: `https://yourprojectname.vercel.app/`

**Note**: See `GAMEPLAN.md` for detailed step-by-step deployment instructions.

## ✅ Testing Checklist

Before deploying, test the following:

- [ ] All navigation links work
- [ ] Hamburger menu works on mobile
- [ ] Contact form validates properly
- [ ] Project carousel functions correctly
- [ ] Website is responsive on mobile, tablet, and desktop
- [ ] All images load correctly
- [ ] No console errors in browser developer tools
- [ ] Keyboard navigation works
- [ ] Color contrast meets accessibility standards

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- All content has been customized with my personal information
- Project screenshots are included in `assets/images/`
- Links point to my GitHub repositories and portfolio site
- Contact form includes client-side validation (backend integration could be added in the future)

## 📧 Contact

For questions or inquiries, please contact: alfonsusaga58@gmail.com

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ to showcase my work**

