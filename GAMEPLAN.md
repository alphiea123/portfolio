# Personal Portfolio Website - Development Gameplan

## Overview
This document outlines my plan for developing and deploying my personal portfolio website to meet all assignment requirements.

---

## Phase 1: Website Development

### 1.1 File Structure
```
portfolio/
├── index.html          (Home page)
├── about.html          (About Me page)
├── projects.html       (Projects showcase)
├── skills.html         (Skills page)
├── contact.html        (Contact form)
├── styles/
│   └── style.css       (Main stylesheet)
├── scripts/
│   ├── main.js         (Navigation & general interactivity)
│   ├── carousel.js     (Project carousel functionality)
│   └── form.js         (Contact form validation)
├── assets/
│   ├── images/         (Project images, screenshots)
│   ├── fonts/          (Custom fonts if needed)
│   └── icons/          (Icon files)
├── README.md           (Project documentation)
└── GAMEPLAN.md         (This file)
```

### 1.2 HTML Structure (Semantic HTML5)

**Each page will include:**
- `<header>`: Site header with logo/name
- `<nav>`: Navigation menu (desktop + hamburger for mobile)
- `<main>`: Main content area
- `<section>`: Logical content sections
- `<footer>`: Footer with copyright and links

**Pages to create:**
1. **index.html (Home)**
   - Hero section with introduction
   - Brief overview or featured content
   - Call-to-action buttons linking to other sections

2. **about.html (About Me)**
   - Personal background section
   - Education section
   - Interests/hobbies section
   - Professional photo or avatar placeholder

3. **projects.html (Projects)**
   - Grid or carousel layout for projects
   - Each project card includes:
     - Project title
     - Description
     - Technologies used
     - Screenshot/image placeholder
     - Links (GitHub, live demo) if applicable
   - At least 3 project showcases

4. **skills.html (Skills)**
   - Skills organized by category (e.g., Programming Languages, Frameworks, Tools)
   - Visual representation (progress bars, icons, or cards)
   - Proficiency levels

5. **contact.html (Contact)**
   - Contact form with:
     - Name field
     - Email field
     - Message textarea
   - Form validation (client-side)
   - Contact information display
   - Social media links (optional)

### 1.3 CSS Styling

**Main stylesheet (styles/style.css) will include:**

1. **Reset & Base Styles**
   - CSS reset/normalize
   - Base typography
   - Color variables (CSS custom properties)
   - Root font size and spacing

2. **Layout Components**
   - Header and navigation styling
   - Main content container
   - Footer styling
   - Grid and flexbox layouts

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoints:
     - Mobile: < 768px
     - Tablet: 768px - 1024px
     - Desktop: > 1024px
   - Media queries for:
     - Navigation menu (hamburger on mobile)
     - Grid layouts (columns adjust)
     - Typography scaling
     - Image sizing

4. **Interactive Elements**
   - Hover effects on buttons and links
   - Smooth transitions
   - Focus states for accessibility

5. **Consistent Design System**
   - Color palette (primary, secondary, accent)
   - Typography hierarchy
   - Spacing system
   - Consistent button styles

### 1.4 JavaScript Functionality

**scripts/main.js:**
- Navigation menu toggle (hamburger menu)
- Smooth scrolling for anchor links
- Active page highlighting in navigation
- Mobile menu close on link click

**scripts/carousel.js:**
- Project carousel/slider functionality
- Next/Previous buttons
- Dot indicators
- Auto-play option (optional)
- Touch/swipe support for mobile

**scripts/form.js:**
- Contact form validation:
  - Name: Required, minimum length
  - Email: Required, valid email format
  - Message: Required, minimum length
- Real-time validation feedback
- Error message display
- Success message on valid submission
- Form submission handling (can use Formspree or similar service, or preventDefault for demo)

### 1.5 Accessibility Features

- Alt text for all images
- ARIA labels where needed
- Semantic HTML structure
- Keyboard navigation support
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators visible
- Skip to main content link (optional but good practice)

---

## Phase 2: Deployment

### 2.1 GitHub Repository Setup

**Steps you'll need to complete (manual):**

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up with email or social account

2. **Create New Repository**
   - Click the "+" icon in top right → "New repository"
   - Repository name: `portfolio-website` (or your preferred name)
   - Description: "Personal portfolio website"
   - Visibility: Public (required for free GitHub Pages)
   - Check "Add a README file"
   - Click "Create repository"

3. **Connect Local Repository to GitHub**
   - After creating the repo, GitHub will show instructions
   - Or use GitHub Desktop:
     - Open GitHub Desktop
     - File → Add Local Repository
     - Navigate to your portfolio folder
     - Click "Publish repository" to push to GitHub

4. **Push Files to GitHub**
   - Commit all files with message: "Initial commit: Portfolio website"
   - Push to main/master branch

### 2.2 GitHub Pages Deployment (Optional but Recommended)

**Steps you'll need to complete:**

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" in left sidebar
   - Under "Source", select "main" branch (or "master" if that's your default)
   - Select "/ (root)" folder
   - Click "Save"
   - Your site will be available at: `https://yourusername.github.io/portfolio-website/`

2. **Verify Deployment**
   - Wait 1-2 minutes for deployment
   - Visit your GitHub Pages URL
   - Test all pages and functionality

### 2.3 Vercel Deployment

**Steps you'll need to complete:**

1. **Sign Up for Vercel**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Project**
   - After signing in, click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find and select your `portfolio-website` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Other (or leave as detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** Leave empty (static site, no build needed)
   - **Output Directory:** `./` (leave as default)
   - **Install Command:** Leave empty
   - Project Name: Can be customized or left as default
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site (usually 1-2 minutes)
   - You'll see a success message with your live URL
   - URL format: `https://yourprojectname.vercel.app/`

5. **Configure Custom Domain (Optional)**
   - If you have a domain, you can add it in project settings
   - Go to Project → Settings → Domains
   - Add your custom domain

6. **Verify Deployment**
   - Visit your Vercel URL
   - Test all pages, links, and functionality
   - Check responsive design on different screen sizes

---

## Phase 3: Testing & Documentation

### 3.1 Testing Checklist

**Functionality:**
- [ ] All navigation links work
- [ ] Hamburger menu works on mobile
- [ ] Contact form validates properly
- [ ] Project carousel/slider functions correctly
- [ ] All images load
- [ ] No broken links

**Responsive Design:**
- [ ] Test on mobile phone (or browser dev tools)
- [ ] Test on tablet size
- [ ] Test on desktop
- [ ] Navigation adapts correctly
- [ ] Text remains readable
- [ ] Images scale appropriately

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible (test with browser extensions)
- [ ] Color contrast is sufficient
- [ ] All images have alt text

**Browser Compatibility:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)

### 3.2 Documentation (README.md)

**Contents:**
- Project title and description
- Features list
- Technologies used
- File structure overview
- Local development instructions
- Deployment URLs (GitHub Pages and Vercel)
- Screenshots (optional but encouraged)
- Author information

---

## Manual Steps Required (Cannot Be Automated)

### Steps You Must Complete Yourself:

1. **GitHub Account Creation**
   - Visit github.com and sign up

2. **GitHub Repository Creation**
   - Create new repository through GitHub web interface
   - Or use GitHub Desktop

3. **Pushing Code to GitHub**
   - Use Git commands or GitHub Desktop to push your local files

4. **Vercel Account & Deployment**
   - Sign up with GitHub credentials
   - Import repository and deploy

5. **Custom Content**
   - Replace placeholder text with your actual information
   - Add your own project images
   - Update contact information

6. **Optional Enhancements**
   - Add real project screenshots
   - Customize colors/branding
   - Add more projects
   - Integrate contact form with backend service (Formspree, Netlify Forms, etc.)

---

## Timeline Estimate

- **Development:** 4-6 hours
- **Testing:** 1-2 hours
- **Deployment:** 30 minutes
- **Documentation:** 30 minutes

**Total:** 6-9 hours

---

## Next Steps

1. Review this gameplan
2. Files will be created with your portfolio structure
3. Customize content with your personal information
4. Add your project images
5. Test locally in browser
6. Deploy to GitHub and Vercel following the manual steps above
7. Submit assignment with both URLs

---

## Tips for Success

- Test your website in multiple browsers before deploying
- Use browser dev tools (F12) to test responsive design
- Keep your GitHub repository organized
- Commit changes frequently with descriptive messages
- Take screenshots of your website on different devices for your report
- Don't forget to update the README with your deployment URLs

---

**Note:** All code files were built with a professional structure and best practices. I've customized all the content with my personal information, projects, and details.


