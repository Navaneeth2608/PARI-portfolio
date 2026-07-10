# Paribalan K - Personal Portfolio Website

A premium, modern, responsive, and recruiter-focused portfolio website for **Paribalan K**, an Electronics and Communication Engineering student. Inspired by high-end, editorial design layouts, it features a split-screen visual grid, classic serif headings, glassmorphic navigations, a dynamic light/dark mode theme system, and smooth reveal animations.

## 🛠️ Tech Stack & Key Libraries

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Integrated CSS-in-JS variables & `@theme` rules)
- **Animations**: Framer Motion (Scroll reveal wrappers, menu slides, state fades)
- **Icons**: Lucide Icons (Sleek vector icons)
- **Forms**: Formspree (Serverless direct contact form handling)

---

## 📂 Project Structure

```text
personal-portfolio/
├── scripts/
│   └── process_image.py     # Image processing script (Pillow-based headshot cropping & transparency)
├── public/
│   ├── profile-color.jpg     # Processed color headshot
│   ├── profile-gray.jpg      # Processed grayscale headshot
│   ├── profile-transparent.png # Processed transparent background color headshot
│   ├── profile-transparent-gray.png # Processed transparent background grayscale headshot
│   └── resume.pdf            # PDF Resume download target
└── src/
    ├── app/
    │   ├── globals.css       # Direct theme setup, glassmorphism rules, scrollbar customizations
    │   ├── layout.tsx        # SEO configurations, Google fonts loader, JSON-LD structured script
    │   ├── page.tsx          # Home page orchestrator, loading screen state wrapper
    │   ├── providers.tsx     # Theme Provider (Light/Dark state manager)
    │   ├── robots.ts         # robots.txt config
    │   └── sitemap.ts        # sitemap.xml generator
    └── components/
        ├── Navbar.tsx        # Responsive header menu with scroll progress and theme toggles
        ├── Hero.tsx          # Split Hero component displaying name, summary, grayscale headshot
        ├── About.tsx         # Personal narrative, core focus areas, languages
        ├── Skills.tsx        # Tech skills grouped into grid cards with hover gradients
        ├── Experience.tsx    # Vertical internship timeline mapping NIT Trichy internship
        ├── Projects.tsx      # Projects grid containing custom SVG waves/plots
        ├── Education.tsx     # Academic path grid (College, High school, Secondary school)
        ├── Certifications.tsx # Course/Workshop certifications & student achievements grid
        ├── Contact.tsx       # Contact form with email link and Formspree submission
        ├── Footer.tsx        # Simple footer with social links
        └── UI.tsx            # ScrollReveal, LoadingScreen, and BackToTop components
```

---

## ⚙️ Local Installation & Development

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** (v10+) installed.

### Setup Instructions

1. **Extract/Open the folder** as your active workspace:
   ```bash
   cd C:\Users\Dell\.gemini\antigravity-ide\scratch\personal-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

4. **Verify TypeScript and Build**:
   ```bash
   npm run build
   ```

---

## 📝 Customization Instructions

### 1. Contact Form (Formspree)
The contact form uses Formspree to handle submissions without server-side logic.
To receive messages to your email:
1. Go to [Formspree](https://formspree.io/) and create a free account.
2. Create a new form project and copy the form ID/URL (e.g., `https://formspree.io/f/your_form_id`).
3. Open `src/components/Contact.tsx` and replace the endpoint URL in the `fetch` function (around line 30):
   ```typescript
   const response = await fetch("https://formspree.io/f/your_form_id", { ... });
   ```

### 2. Update Details
- **Resume File**: Place your updated resume PDF in the `public/` folder, naming it `resume.pdf` to make it downloadable.
- **Headshot**: You can replace the profiles in `public/` directly or run `python scripts/process_image.py` to re-process another photo.
- **Content Sections**: The descriptions, projects, and skills can be easily modified inside their respective component files in `src/components/`.

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. **GitHub Import**: Push your code to a new GitHub repository.
2. **Vercel Login**: Sign in to [Vercel](https://vercel.com) using your GitHub account.
3. **Import Project**: Click **Add New** > **Project** and select your portfolio repository.
4. **Deploy**: Leave default settings intact (Vercel automatically detects Next.js configurations) and click **Deploy**. Vercel will build and provision an SSL-secured URL for you.

### Deploy to Netlify
1. Log in to [Netlify](https://netlify.com) and click **Add new site** > **Import an existing project**.
2. Select GitHub and choose your repository.
3. Netlify will autodetect Next.js configuration:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
4. Click **Deploy Site**.
