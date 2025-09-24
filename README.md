# Weather React App

A modern, responsive weather application built with React that provides current weather information for cities worldwide. The app features a clean, intuitive interface with real-time weather data and a robust component architecture using Atomic Design principles.

![Weather App](https://img.shields.io/badge/React-19.1.1-blue)
![Storybook](https://img.shields.io/badge/Storybook-9.1.6-pink)
![Testing](https://img.shields.io/badge/Testing-Vitest-green)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [API Configuration](#api-configuration)
- [Component Architecture](#component-architecture)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with beautiful weather backgrounds
- **Component-Driven Development**: Built using Atomic Design principles
- **Storybook Integration**: Interactive component documentation and testing
- **Comprehensive Testing**: Unit and visual regression testing with Vitest and Chromatic
- **Search Functionality**: Easy-to-use city search with instant results
- **Weather Details**: Temperature, humidity, wind speed, and weather conditions

## 🛠 Tech Stack

### Core Technologies
- **React 19.1.1** - Modern React with latest features
- **JavaScript (ES6+)** - Modern JavaScript syntax and features
- **CSS3** - Custom styling with responsive design
- **Axios** - HTTP client for API requests

### Development & Testing
- **Storybook 9.1.6** - Component documentation and testing
- **Vitest 3.2.4** - Fast unit testing framework
- **Playwright** - Browser automation for testing
- **React Testing Library** - React component testing utilities
- **Chromatic** - Visual regression testing

### Build & Deployment
- **Create React App** - Build tooling and development server
- **React Scripts 5.0.1** - Build and development scripts

## 📁 Project Structure

```
weather-react/
├── weather-react/              # Main React application
│   ├── public/                 # Static assets
│   │   ├── index.html         # HTML template
│   │   ├── favicon.ico        # App icon
│   │   └── manifest.json      # PWA manifest
│   ├── src/                   # Source code
│   │   ├── components/        # React components (Atomic Design)
│   │   │   ├── atoms/         # Basic UI elements
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Input.jsx
│   │   │   ├── molecules/     # Component combinations
│   │   │   │   └── SearchBar.jsx
│   │   │   ├── organisms/     # Complex components
│   │   │   │   ├── WeatherCard.jsx
│   │   │   │   └── WeatherCard.stories.jsx
│   │   │   └── pages/         # Page-level components
│   │   │       └── WeatherPage.jsx
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Global styles
│   │   └── index.js           # Application entry point
│   └── package.json           # Dependencies and scripts
├── stories/                   # Storybook stories
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Page.jsx
│   └── *.stories.js
├── .storybook/                # Storybook configuration
│   ├── main.js
│   ├── preview.js
│   └── vitest.setup.js
├── vitest.config.js           # Vitest configuration
└── package.json               # Root dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-react
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install React app dependencies**
   ```bash
   cd weather-react
   npm install
   cd ..
   ```

4. **Start the development server**
   ```bash
   cd weather-react
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

The app will automatically reload when you make changes to the code.

## 💻 Development

### Available Scripts

#### React Application (in `/weather-react` directory)

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject from Create React App (irreversible)
npm run eject
```

#### Storybook & Testing (in root directory)

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook

# Run Chromatic visual tests
npm run chromatic
```

### Development Workflow

1. **Component Development**
   - Create components following Atomic Design principles
   - Start with atoms, build up to molecules, organisms, and pages
   - Use functional components with React Hooks

2. **Storybook Development**
   - Create stories for each component
   - Document component props and variations
   - Test components in isolation

3. **Styling**
   - Use CSS modules or styled-components
   - Follow responsive design principles
   - Maintain consistent design system

## 🧪 Testing

### Running Tests

```bash
# Run React app tests
cd weather-react
npm test

# Run Storybook tests with Vitest
npm run test

# Run visual regression tests
npm run chromatic
```

### Test Coverage

The project includes:
- **Unit Tests**: Component functionality testing
- **Integration Tests**: Component interaction testing  
- **Visual Tests**: UI appearance and regression testing
- **Accessibility Tests**: Screen reader and keyboard navigation testing

## 🌤 API Configuration

The application uses the SheCodes Weather API to fetch weather data.

### API Details

- **Provider**: SheCodes Weather API
- **Base URL**: `https://api.shecodes.io/weather/v1/current`
- **Data Format**: JSON
- **Units**: Metric (Celsius, km/h)

### API Response Structure

```javascript
{
  city: "Paris",
  time: 1640995200,
  condition: {
    description: "clear sky",
    icon_url: "https://api.shecodes.io/weather/v1/icons/clear-day.svg"
  },
  temperature: {
    current: 15,
    humidity: 65
  },
  wind: {
    speed: 10
  }
}
```

### Environment Variables

Create a `.env` file in the `weather-react` directory:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_WEATHER_API_URL=https://api.shecodes.io/weather/v1/current
```

**Note**: The current implementation has the API key hardcoded. For production use, move the API key to environment variables.

## 🏗 Component Architecture

The application follows **Atomic Design** principles:

### Atoms
- `Button`: Reusable button component
- `Input`: Form input component

### Molecules  
- `SearchBar`: Search input with submit button

### Organisms
- `WeatherCard`: Complete weather information display

### Pages
- `WeatherPage`: Main application page with search and weather display

### Component Guidelines

1. **Props**: Use PropTypes for type checking
2. **State**: Use React Hooks for state management
3. **Styling**: Component-specific CSS classes
4. **Accessibility**: Include ARIA labels and keyboard navigation
5. **Responsiveness**: Mobile-first design approach

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-width layout with side-by-side elements
- **Tablet**: Adapted spacing and font sizes
- **Mobile**: Stacked layout with touch-friendly controls

### Breakpoints

- Mobile: `max-width: 768px`
- Tablet: `769px - 1023px`  
- Desktop: `1024px+`

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write tests for new functionality
5. Run tests and ensure they pass
6. Create Storybook stories for new components
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

### Code Style

- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Pull Request Process

1. Ensure all tests pass
2. Update documentation as needed
3. Add Storybook stories for new components
4. Request code review from maintainers
5. Address feedback and merge

## 🔧 Troubleshooting

### Common Issues

1. **API Key Issues**
   - Ensure your API key is valid and not expired
   - Check API request limits
   - Verify network connectivity

2. **Build Failures**
   - Clear node_modules and reinstall dependencies
   - Check Node.js version compatibility
   - Verify all required dependencies are installed

3. **Storybook Issues**
   - Restart Storybook server
   - Clear Storybook cache
   - Check story file syntax

### Getting Help

- Check existing GitHub issues
- Create a new issue with detailed description
- Include error messages and steps to reproduce
- Provide system information (OS, Node.js version, etc.)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🙋‍♂️ Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

---

**Made with ❤️ and React**