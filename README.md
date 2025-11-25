# Noxe | Movie Discovery Platform

## About Noxe

**Noxe** is a modern movie discovery web application that lets users browse, search, and explore thousands of movies with detailed information, ratings, and recommendations. Built with a focus on user experience and performance, Noxe delivers a seamless platform for movie enthusiasts.

- 🎬 Discover trending, popular, and upcoming movies  
- 🔍 Advanced search and filtering capabilities  
- ⭐ Detailed movie information with ratings and reviews  
- 💾 Save favorite movies to your personal watchlist  
- 📱 Fully responsive design across all devices  
- ⚡ Fast performance and smooth interactions  

## Key Features

✨ **Movie Discovery**
- Browse trending, popular, top-rated, and upcoming movies
- Real-time API integration for up-to-date content

🔎 **Search & Filter**
- Search movies by title, genre, and release year
- Filter results by popularity, rating, and release date

📊 **Detailed Information**
- Full movie details including synopsis, cast, director, and runtime
- User ratings and review summaries
- High-quality poster and backdrop images

❤️ **Watchlist**
- Save favorite movies for later
- Manage and organize your personal collection

📱 **Responsive Design**
- Optimized for desktop, tablet, and mobile devices
- Smooth navigation and intuitive interface

⚙️ **Performance Optimized**
- Fast loading times
- Efficient API calls and data handling
- Smooth animations and transitions

## Technologies & Tools

- **Frontend Framework:** React.js  
- **Styling:** Sass, Bootstrap, TailwindCSS  
- **State Management:** React Hooks (useState, useEffect)  
- **API Integration:** TMDB API (The Movie Database)  
- **Version Control:** Git, GitHub  
- **Deployment:** Netlify  
- **Other Tools:** VS Code, Figma, Postman  

## Technologies Used

```
Frontend:
├── React 18.x
├── Sass (SCSS)
├── Bootstrap 5
├── TailwindCSS
├── JavaScript ES6+
└── Axios (API calls)

Tools:
├── Git & GitHub
├── VS Code
├── Figma (Design)
└── Netlify (Hosting)
```

## Project Structure

```
noxe/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Navbar.jsx
│   │   └── Watchlist.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MoviePage.jsx
│   │   └── Watchlist.jsx
│   ├── styles/
│   │   ├── main.scss
│   │   ├── components.scss
│   │   └── responsive.scss
│   ├── services/
│   │   └── tmdbAPI.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API Key (Get it [here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/noxe.git
cd noxe
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment variables**
Create a `.env` file in the root directory:
```
REACT_APP_TMDB_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://api.themoviedb.org/3
```

4. **Start the development server**
```bash
npm start
```

5. **Open in browser**
Navigate to `http://localhost:3000`

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to Netlify
npm run deploy
```

## API Integration

Noxe uses **TMDB API** (The Movie Database) for all movie data:

- **Trending Movies:** Fetches current trending movies
- **Search:** Full-text search across movie titles
- **Movie Details:** Comprehensive information for each movie
- **Similar Movies:** Get recommendations based on selected movie

**API Endpoints Used:**
- `/trending/movie/week` - Trending movies
- `/movie/popular` - Popular movies
- `/search/movie` - Search functionality
- `/movie/{id}` - Movie details
- `/movie/{id}/similar` - Similar movies

## Features in Detail

### 🎬 Movie Discovery
Browse through curated collections of movies including trending, popular, top-rated, and upcoming releases with beautiful card layouts.

### 🔍 Smart Search
Search any movie and get instant results with filtering options by genre, rating, and release date.

### ⭐ Detailed Information
View comprehensive movie details including cast, crew, synopsis, runtime, budget, revenue, and user ratings.

### 💾 Personal Watchlist
Add movies to your watchlist and keep track of what you want to watch. Your watchlist is saved locally.

### 📱 Responsive Interface
Beautiful, mobile-first design that works flawlessly on all screen sizes from phones to desktop.

## Performance Metrics

- ⚡ First Contentful Paint: < 2s
- 🚀 Lighthouse Score: 90+
- 📊 SEO Optimized
- ♿ WCAG Accessibility Compliant

## Live Demo

🌐 **[Visit Noxe Live](https://noxe-flex.netlify.app/#/login)**

## GitHub Repository

📂 **[View Source Code](https://github.com/yourusername/noxe)**

## Contact & Support

- **Email:** [your-email@example.com](elwan7497@gmail.com)  
- **LinkedIn:** [Your LinkedIn Profile](www.linkedin.com/in/mohamed-elwan-frontend)  
- **GitHub:** [@yourusername](https://github.com/mohamedelwan22))  


## Future Enhancements

- 🎤 Add voice search functionality
- 🌙 Implement dark mode
- 👥 User authentication and profiles
- 💬 Community reviews and ratings
- 🎥 Streaming provider information
- 📧 Movie recommendations via email

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built by [Mohamed Elwan] | Last Updated: 2025**
