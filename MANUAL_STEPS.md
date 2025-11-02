# Manual Steps Guide - Deployment Instructions

This guide explains the steps I followed to deploy my portfolio website. These are manual steps that require interaction with GitHub and Vercel.

---

## Part 1: Customizing Website Content ✓

### Step 1: Personal Information ✓

**Completed:** I added all my personal information throughout the site.

**What I did:**

1. Updated each HTML file (index.html, about.html, projects.html, skills.html, contact.html)
2. Replaced "Your Name" with my actual name throughout
3. In `about.html`: Wrote content about my background, education, and interests
4. In `contact.html`: Added my email and location
5. In `projects.html`: Added descriptions of my actual projects

**Where it appears:**
- My name: Header of every page, footer, page titles
- Personal info: `about.html` - paragraphs describing my background
- Education: `about.html` - my degree and university information
- Contact: `contact.html` - my email and location

---

## Part 2: Project Images ✓

### Step 2: Project Screenshots ✓

**Completed:** I added screenshots of my projects.

**What I did:**

1. Added screenshots of my projects to the `assets/images/` folder:
   - `project1.png` - G-boy Videogame Console
   - `project2.png` - Battery Powered Lightbox
   - `project3.png` - Modular Hydroponic Tower

2. Updated `projects.html` to use my images in both the carousel and project cards grid

3. Added proper image tags with alt text for accessibility

---

## Part 3: Setting Up GitHub

### Step 3: Create a GitHub Account (if you don't have one)

**What to do:** Sign up for a free GitHub account.

**How to do it:**

1. Go to [https://github.com](https://github.com)
2. Click the "Sign up" button in the top right corner
3. Enter your email address, create a password, and choose a username
4. Verify your email address when prompted
5. Complete the setup process

**Why:** GitHub is where you'll store your website code online so you can share it and deploy it.

---

### Step 4: Create a New Repository on GitHub

**What to do:** Create a new "repository" (think of it as a folder) on GitHub to store your website files.

**How to do it:**

1. After logging into GitHub, look for a "+" icon in the top right corner
2. Click the "+" and select "New repository" from the dropdown menu
3. Fill in the form:
   - **Repository name:** `portfolio-website` (or any name you like)
   - **Description:** "Personal portfolio website" (optional but helpful)
   - **Visibility:** Choose "Public" (so GitHub Pages can work for free)
   - Check the box that says "Add a README file"
4. Click the green "Create repository" button

**What this does:** Creates an empty folder on GitHub where you'll upload all your website files.

---

### Step 5: Upload Your Files to GitHub

**What to do:** Copy all your website files from your computer to GitHub.

**Option A: Using GitHub Desktop (Easiest for Beginners)**

1. Download GitHub Desktop from [https://desktop.github.com](https://desktop.github.com)
2. Install and open GitHub Desktop
3. Sign in with your GitHub account
4. Click "File" → "Add Local Repository"
5. Click "Choose" and navigate to your portfolio folder (the one with all your HTML files)
6. Click "Open"
7. If asked, click "Create a Repository" - make sure it's connected to your GitHub account
8. In the bottom left, type a message like "Initial commit: Portfolio website"
9. Click "Commit to main"
10. Click "Publish repository" (or "Push origin" if you already published)
11. Make sure "Keep this code private" is UNCHECKED
12. Click "Publish repository"

**Option B: Using Git Commands (For Terminal Users)**

1. Open your terminal/command prompt
2. Navigate to your portfolio folder:
   ```bash
   cd C:\Users\auggi\OneDrive\Documents\GitHub\portfolio
   ```
3. Initialize git (if not already done):
   ```bash
   git init
   ```
4. Add all files:
   ```bash
   git add .
   ```
5. Commit the files:
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```
6. Connect to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   ```
   (Replace YOUR_USERNAME with your actual GitHub username)
7. Push files to GitHub:
   ```bash
   git push -u origin main
   ```
8. Enter your GitHub username and password when prompted

**Option C: Using GitHub Web Interface (Simple but limited)**

1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all your files and folders into the upload area
4. Scroll down, type a commit message like "Initial upload"
5. Click "Commit changes"

**What this does:** Uploads all your website files to GitHub so they're stored online.

---

### Step 6: Enable GitHub Pages (Optional but Recommended)

**What to do:** Make your website accessible online through GitHub Pages.

**How to do it:**

1. Go to your repository on GitHub
2. Click the "Settings" tab (top of the page)
3. Scroll down in the left sidebar and click "Pages"
4. Under "Source", click the dropdown and select "main" (or "master" if that's what you have)
5. Make sure the folder is set to "/ (root)"
6. Click "Save"
7. Wait 1-2 minutes for GitHub to process your site
8. You'll see a green checkmark and a URL that looks like: `https://YOUR_USERNAME.github.io/portfolio-website/`
9. Click the URL to see your live website!

**What this does:** Makes your website accessible to anyone on the internet through a free GitHub Pages URL.

---

## Part 4: Deploying to Vercel

### Step 7: Sign Up for Vercel

**What to do:** Create a Vercel account to deploy your website.

**How to do it:**

1. Go to [https://vercel.com](https://vercel.com)
2. Click the "Sign Up" button
3. Click "Continue with GitHub" (this is the easiest option since you already have a GitHub account)
4. Authorize Vercel to access your GitHub account (click "Authorize Vercel")
5. Complete the sign-up process

**Why:** Vercel provides a free hosting service that makes your website live on the internet with a custom URL.

---

### Step 8: Import Your Project to Vercel

**What to do:** Connect your GitHub repository to Vercel so it can deploy your website.

**How to do it:**

1. After signing in to Vercel, you'll see a dashboard
2. Click "Add New..." button (usually a big button in the center or top right)
3. Click "Project" from the dropdown
4. You'll see a list of your GitHub repositories
5. Find your "portfolio-website" repository and click "Import" next to it
6. If you don't see it, click "Adjust GitHub App Permissions" and make sure all repositories are selected

**What this does:** Tells Vercel which website from GitHub you want to deploy.

---

### Step 9: Configure and Deploy on Vercel

**What to do:** Set up the deployment settings and make your website go live.

**How to do it:**

1. After importing, you'll see a configuration page with these fields:
   - **Framework Preset:** This should automatically detect as "Other" - leave it as is
   - **Root Directory:** Should be `./` - leave it as is
   - **Build Command:** Leave this empty (your site doesn't need building)
   - **Output Directory:** Should be `./` - leave it as is
   - **Install Command:** Leave this empty

2. Scroll down - you can customize the project name or leave it as default
3. Click the big "Deploy" button at the bottom
4. Wait 1-2 minutes - you'll see a progress indicator
5. When it says "Congratulations!" or shows a checkmark, your site is deployed!
6. You'll see a URL that looks like: `https://portfolio-website.vercel.app/`
7. Click the URL to visit your live website!

**What this does:** Takes your code from GitHub and makes it live on the internet through Vercel's servers.

---

### Step 10: Test Your Deployed Websites

**What to do:** Make sure everything works on both GitHub Pages and Vercel.

**How to test:**

1. **Open your GitHub Pages URL** (from Step 6)
2. **Open your Vercel URL** (from Step 9)
3. Test both sites and check:
   - Can you see all pages? (Home, About, Projects, Skills, Contact)
   - Do all navigation links work?
   - Does the hamburger menu work on mobile? (Use browser dev tools - press F12, then click the device icon)
   - Does the contact form validate? (Try submitting with empty fields - should show errors)
   - Do the project carousel buttons work?
   - Do all images load? (If you added images)
   - Does the website look good on mobile? (Use browser dev tools to test different screen sizes)

**If something doesn't work:**
- Check the browser console (F12 → Console tab) for errors
- Make sure all file paths are correct
- Verify all your files were uploaded to GitHub

---

## Part 5: Creating Your Documentation Report

### Step 11: Write Your 1-2 Page Report

**What to do:** Create a document describing your website.

**What to include:**

1. **Overview of Website Features:**
   - List all the pages (Home, About, Projects, Skills, Contact)
   - Describe the responsive design
   - Mention the interactive features (carousel, form validation, hamburger menu)

2. **Challenges Faced and Solutions:**
   - Did you have trouble with something? Write about it!
   - Example: "I had difficulty making the website responsive, but I learned about media queries and used them to adjust layouts for different screen sizes."

3. **Screenshots (Optional but Encouraged):**
   - Take screenshots of your website on:
     - Desktop/laptop screen
     - Mobile phone (or use browser dev tools to simulate mobile)
   - Include 2-3 screenshots in your report

**How to create the report:**
- Use Microsoft Word, Google Docs, or any word processor
- Save it as a PDF if possible
- Include the URLs to both your GitHub Pages and Vercel sites

---

## Part 6: Submission Checklist

Before submitting your assignment, make sure you have:

- [ ] All website files customized with your information
- [ ] Website deployed on GitHub (and GitHub Pages enabled)
- [ ] Website deployed on Vercel
- [ ] Both URLs work and are accessible
- [ ] All pages function correctly
- [ ] Website is responsive (works on mobile)
- [ ] Contact form validates properly
- [ ] Project carousel works
- [ ] Documentation report completed (1-2 pages)
- [ ] README.md file included in repository

---



If you get stuck on any step:

1. **GitHub Help:** Visit [https://docs.github.com](https://docs.github.com) or search "GitHub tutorials" on YouTube
2. **Vercel Help:** Visit [https://vercel.com/docs](https://vercel.com/docs) or search "Vercel deployment tutorial" on YouTube
3. **HTML/CSS Help:** Visit [https://www.w3schools.com](https://www.w3schools.com) for tutorials



