📝 BlogBot Studio

BlogBot Studio is a full-stack web platform that helps users generate, manage, and publish visually stunning blog content with ease. Powered by AI and backed by a robust admin system, it blends automation with creativity to streamline blogging for individuals and teams.

🚀 Features
- AI-Powered Content Generation
Generate blogs using natural language prompts via Gemini integration.
- Admin Dashboard
Add, edit, and publish blogs securely. Toggle publish status in one click.
- Comment System
Users can post comments; admins can review and approve them.
- Responsive UI/UX
Tailwind-powered layouts with elegant design and mobile optimization.
- Image Uploads & Optimization
Integrated ImageKit for automatic compression and WebP conversion.
- Social Sharing Tools
Pre-built buttons to share posts on Facebook, Twitter, and more.

🧠 Tech Stack
| Layer | Technologies | 
| Frontend | React, Tailwind CSS, React Router, React Hot Toast, Moment.js | 
| Backend | Express.js, Node.js, MongoDB, Mongoose | 
| Middleware | JWT Auth, Express JSON, Multer (File Uploads) | 
| AI Integration | Gemini (Google AI model for blog content generation) | 
| Image Handling | ImageKit SDK | 


📦 Installation
git clone https://github.com/anirudh46-cse/BlogBot-Studio.git
cd BlogBot-Studio

npm install

npm run dev

# if using concurrently


⚙️ Environment Setup
Create a .env file with the following:
VITE_BASE_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/blogbot
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
JWT_SECRET=your_jwt_secret


💸 Monetization Plans
- Freemium Model
Limited AI generations for free users; unlock premium features via subscription.
- Template Marketplace
Offer custom layouts and branded themes for purchase.
- Team Dashboard (upcoming)
Multi-author publishing, analytics, and performance metrics.


📬 Contact & Credits
Built and maintained by Anirudh

📧 sharma23ani@gmail.com

🌐 GitHub Repository


