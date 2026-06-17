# 🛒 Shopify Profit Calculator

A professional-grade React application that helps Shopify store owners calculate product profitability before launching or advertising. Built with **Vite + React** and styled with a premium Shopify-inspired design system.

![Shopify Profit Calculator](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-blue?style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- **Live Calculations** — Results update instantly as you type
- **5 Input Fields** — Product Cost, Selling Price, Shipping, Gateway Fee %, Marketing Cost
- **5 Result Cards** — Revenue, Total Cost, Net Profit, Profit Margin, Break-Even ROAS
- **Input Validation** — Prevents negative values and shows friendly error messages
- **Responsive Design** — Mobile, tablet, and desktop optimized
- **Shopify-Style UI** — Premium SaaS dashboard aesthetic
- **Profit Tips** — Educational section with actionable advice
- **SEO Optimized** — Proper meta tags, semantic HTML, accessible labels

---

## 🧮 Formulas Used

| Metric | Formula |
|---|---|
| **Revenue** | Selling Price |
| **Gateway Fee Amount** | (Selling Price × Gateway Fee %) / 100 |
| **Total Cost** | Product Cost + Shipping + Marketing + Gateway Fee Amount |
| **Net Profit** | Revenue − Total Cost |
| **Profit Margin** | (Net Profit / Revenue) × 100 |
| **Break-Even ROAS** | Revenue / Total Cost |

---

## 🚀 Quick Start — Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/shopify-profit-calculator.git

# 2. Navigate into the project
cd shopify-profit-calculator

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

---

## 📁 Project Structure

```
shopify-profit-calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Calculator/
│   │   │   ├── Calculator.jsx      # Core calculator logic & layout
│   │   │   └── Calculator.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx          # Credits & Digital Heroes button
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.jsx          # Sticky glassmorphism nav
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx            # Landing hero section
│   │   │   └── Hero.css
│   │   ├── InputField/
│   │   │   ├── InputField.jsx      # Reusable input component
│   │   │   └── InputField.css
│   │   ├── ProfitTips/
│   │   │   ├── ProfitTips.jsx      # Educational tips section
│   │   │   └── ProfitTips.css
│   │   └── ResultsPanel/
│   │       ├── ResultsPanel.jsx    # Gradient result cards
│   │       └── ResultsPanel.css
│   ├── App.jsx                      # Root app component
│   ├── App.css                      # App layout styles
│   ├── index.css                    # Design system & CSS variables
│   └── main.jsx                     # React entry point
├── index.html                       # SEO-optimized HTML shell
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 Deployment — Vercel

### Option 1: Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# Follow the prompts:
#   - Link to existing project? No
#   - Project name: shopify-profit-calculator
#   - Framework: Vite
#   - Build command: npm run build
#   - Output directory: dist
```

### Option 2: Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"**
4. Import your `shopify-profit-calculator` repository
5. Vercel auto-detects Vite — click **Deploy**
6. Your site is live! 🎉

---

## 📤 Git Commands for GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "feat: Shopify Profit Calculator - complete app"

# Add your remote origin
git remote add origin https://github.com/YOUR_USERNAME/shopify-profit-calculator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-based UI |
| **Vite** | Fast build tool & dev server |
| **Vanilla CSS** | Design system with custom properties |
| **Inter Font** | Modern Google Fonts typography |

---

## 👤 Developer

**Purvesh Khandare**
📧 purveshkhandare083@gmail.com

---

## 🔗 Built for Digital Heroes

[Visit Digital Heroes →](https://digitalheroesco.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
