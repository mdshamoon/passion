# Scientific Curiosity Labs

A Next.js website dedicated to promoting scientific curiosity and research-oriented mindset among Indian youth through interactive labs across different cities.

## 🚀 Mission

Creating interactive science labs starting from Lucknow to inspire the next generation of Indian scientists and researchers. Our goal is to make science accessible, engaging, and fun through hands-on experiences and cutting-edge technology.

## 🏗️ Features

### Lab Equipment
- **Robo Maze Solver**: AI-powered robot with computer vision and pathfinding algorithms
- **Holographic Display**: Interactive 3D projections for complex scientific concepts
- **3D Printer Lab**: High-precision printing for rapid prototyping and education
- **Dual Monitor Setup**: Advanced computing stations for research and collaboration

### Scientific Focus Areas
- **Quantum Computing**: Exploring quantum mechanics for next-gen computing
- **Thorium-Based Reactors**: Advancing clean nuclear energy solutions
- Interactive D3.js visualizations for both areas

### City Expansion Plan
- **Phase 1 (2025)**: Lucknow (Active)
- **Phase 2 (2025-2026)**: Delhi, Bangalore, Mumbai, Hyderabad
- **Phase 3 (2027)**: Chennai and beyond

### YouTube Channel Integration
Curated list of inspiring scientific YouTube channels that promote curiosity and learning.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Visualizations**: D3.js
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/passion.git
cd passion
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory.

3. Deploy the `out` directory to your hosting platform.

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Select "GitHub Actions" as the source
4. The site will automatically deploy on every push to the main branch

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
└── components/
    ├── ParticleBackground.tsx    # D3.js particle animation
    ├── LabEquipment.tsx         # Interactive equipment showcase
    ├── ScientificFocus.tsx      # Quantum computing & thorium visualizations
    ├── YoutubeChannels.tsx      # Educational channel recommendations
    └── CityExpansion.tsx        # Interactive India map and expansion plan
```

## 🎨 Design Philosophy

- **Scientific Theme**: Deep space colors (blues, purples, cyans)
- **Interactive Elements**: D3.js visualizations and animations
- **Modern UI**: Glass morphism effects and gradient backgrounds
- **Mobile First**: Responsive design for all devices
- **Performance**: Optimized for fast loading and smooth interactions

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to 'production' for GitHub Pages deployment
- `NEXT_PUBLIC_BASE_PATH`: Automatically configured for GitHub Pages

### Next.js Configuration
The project is configured with:
- Static export for GitHub Pages
- Image optimization disabled for static hosting
- Proper base path configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Contact

For any questions or suggestions about the Scientific Curiosity Labs project, please reach out!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ and passion for science education in India** 🇮🇳
