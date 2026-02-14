# Tech Stack Analyzer 🚀

A beautiful, interactive web application that helps startup founders analyze their app ideas and discover the perfect technology stack with real 2026 pricing data.

![Tech Stack Analyzer](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **🎨 Premium Modern Design** - Glassmorphism UI with smooth animations
- **📊 Comprehensive Database** - 35+ services across 9 categories
- **🚀 Smart Recommendations** - 3 curated stacks (Indie/MVP/Production)
- **💰 Cost Estimation** - Projections at 100, 1K, and 10K users
- **💡 Optimization Tips** - Save money and avoid common pitfalls

## 🔧 Tech Stack Components

- **Frontend Hosting**: Vercel, Netlify, Render
- **Backend/BaaS**: Supabase, Firebase, Appwrite
- **Database**: Neon, PlanetScale, MongoDB Atlas
- **Authentication**: Clerk, Auth0, Supabase Auth
- **File Storage**: Cloudinary, UploadThing, Supabase Storage
- **Payment Gateway**: Stripe, Razorpay, LemonSqueezy
- **Email**: Resend, Mailgun, Postmark
- **Realtime**: Supabase Realtime, Pusher, Ably
- **AI Services**: OpenAI, Anthropic, Replicate
- **Monitoring**: Sentry, LogRocket, Highlight.io

## 🚀 Quick Start

### Option 1: Use Hosted Version

Visit the live application: **[Tech Stack Analyzer](https://abhigpt401.github.io/tech-stack-analyzer/)**

### Option 2: Run Locally

1. Clone the repository:
```bash
git clone https://github.com/ABHIGPT401/tech-stack-analyzer.git
cd tech-stack-analyzer
```

2. Open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

That's it! No build process required - it's a pure HTML/CSS/JavaScript application.

## 📱 How to Use

1. **Describe your app** in the textarea
2. **Select required features** (auth, payments, realtime, etc.)
3. **Choose expected scale** (100, 1K, or 10K users)
4. **Click "Analyze Tech Stack"**
5. **Review recommendations** and cost estimates
6. **Copy results** to share with your team

## 🎯 Example Use Cases

### SaaS Application
> "A project management tool with team collaboration, file uploads, and premium subscriptions"

**Result**: Recommends Vercel + Supabase + Clerk + Stripe

### Realtime Chat App
> "A Slack-like chat application with channels, DMs, file sharing, and AI moderation"

**Result**: Recommends Netlify + Supabase Realtime + OpenAI

### E-commerce Platform
> "An online store with product catalog, shopping cart, and payment processing"

**Result**: Recommends Vercel + MongoDB Atlas + Stripe

## 💰 Cost Comparisons

| Stack Type | 100 Users | 1,000 Users | 10,000 Users |
|------------|-----------|-------------|--------------|
| Indie Hacker | $0/mo | $0/mo | ~$75/mo |
| Startup MVP | $0/mo | ~$50/mo | ~$150/mo |
| Production | ~$300/mo | ~$800/mo | ~$2,000/mo |

*Estimates based on Feb 2026 pricing*

## 🏗️ Architecture

```
tech-stack-analyzer/
├── index.html          # Main HTML structure
├── styles.css          # Design system & styling
├── script.js           # Analysis logic & database
└── README.md           # This file
```

**Tech Stack:**
- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks or build tools
- Google Fonts (Inter, Outfit)
- Responsive design with CSS Grid & Flexbox

## 🎨 Design Highlights

- **Color Palette**: Deep purple/blue gradients on dark background
- **Typography**: Inter (UI) + Outfit (headings)
- **Effects**: Glassmorphism, smooth animations, micro-interactions
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## 📊 Pricing Data Accuracy

All pricing data is researched from official sources as of **February 2026**:

- ✅ Free tier limits verified
- ✅ Paid tier starting prices confirmed
- ✅ Scaling estimates calculated
- ✅ Official documentation links included

**Notable 2026 Updates:**
- Clerk increased free tier to 50K MRUs
- Firebase Cloud Storage requires Blaze plan
- SendGrid discontinued free tier
- Resend emerged as SendGrid replacement

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Updating Pricing
If you notice outdated pricing information:
1. Fork the repository
2. Update the service data in `script.js`
3. Submit a pull request with sources

### Adding Services
To add a new service:
1. Add service data to `TECH_STACK_DB` in `script.js`
2. Include: name, tier, limits, pricing, pros/cons, link
3. Test with sample app descriptions
4. Submit a pull request

### Improving Detection
To enhance keyword detection:
1. Add keywords to `KEYWORDS` object in `script.js`
2. Test with various app descriptions
3. Submit a pull request

## 🐛 Known Limitations

- **Static Pricing**: Pricing data needs manual updates
- **No User Accounts**: Analysis not saved between sessions
- **Limited Services**: Only top 3 services per category shown
- **English Only**: Interface and detection in English only

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Pricing data sourced from official provider websites
- Design inspired by modern SaaS applications
- Built with ❤️ for startup founders

## 📧 Contact

Questions or feedback? Open an issue or reach out!

---

**Built with 💜 for startup founders • Data accurate as of Feb 2026**
