# Interactive Developer Portfolio

A modern, highly interactive personal developer portfolio built with [Next.js](https://nextjs.org/) and modern web technologies. This project focuses on high performance, smooth animations, and a rich user experience featuring custom cursors, smooth scrolling, and an interactive 3D background.

## 🌟 Features

- **Next.js App Router**: Utilizing the latest features of Next.js for optimal performance and SEO.
- **Smooth Scrolling**: Implemented using [Lenis](https://lenis.studiofreight.com/) for a fluid, natural scroll experience.
- **Interactive 3D Background**: Custom interactive particle/ball system for a dynamic visual experience.
- **Custom Cursor**: Enhanced user interaction with a custom-styled, context-aware cursor.
- **Responsive Design**: Fully responsive layout ensuring a great experience across all devices.
- **Modern UI Components**: Modular and reusable React components for Hero, Skills, Experience, Projects, and Contact sections.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** CSS Modules / Vanilla CSS
- **Animation/Interaction:** Lenis (Smooth Scroll), Custom Canvas/WebGL (Interactive Balls)

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   └── components/       # Reusable React components
│       ├── Hero.js
│       ├── Skills.js
│       ├── Experience.js
│       ├── Projects.js
│       ├── Contact.js
│       ├── InteractiveBalls.js
│       ├── CustomCursor.js
│       ├── SmoothScroll.js
│       └── ...
├── public/               # Static assets (images, icons, etc.)
└── package.json          # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (v18+ recommended).

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint to catch syntax and style issues.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues) if you want to contribute.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
