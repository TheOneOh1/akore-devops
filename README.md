# DevOps Portfolio Site

A clean, modern portfolio website built to showcase DevOps engineering skills and experience. Features a responsive design, dark/light mode, and sections for projects, experience, and technical skills.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager**: npm
- **Deployment**: GitHub Pages
<!-- - **Analytics**: Vercel Analytics & Speed Insights -->
- **Icons**: React Icons
- **Typography**: Geist Font

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🚀 Fast page loads with Next.js
- 💼 Project showcase
- 📊 Skills matrix
- 📝 Experience timeline
- 🔍 SEO optimized
- 📈 Built-in analytics

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies:

```bash
npm install
```
3. Update your information:
- Edit `app/config.ts` with your personal details and social links
- Modify project data in `app/projects/project-data.tsx`
- Update experience in `app/experience/experience-data.tsx`
- Customize skills in `app/skills/skills-data.tsx`
- Replace `/public/profile.png` with your profile photo

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view your site

## Deployment

The site is configured to deploy to GitHub Pages using GitHub Actions. Simply push to the main branch, and the workflow will automatically build and deploy your site.

## Project Structure

├── app/ # Next.js app directory
│ ├── components/ # Reusable components
│ ├── projects/ # Projects section
│ ├── experience/ # Experience section
│ ├── skills/ # Skills section
│ └── config.ts # Site configuration
├── public/ # Static assets
└── content/ # Blog posts and content (MDX)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.