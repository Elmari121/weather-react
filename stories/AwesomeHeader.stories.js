import { fn } from 'storybook/test';
import { AwesomeHeader } from './components/AwesomeHeader';
import { ThemeProvider } from './context/ThemeContext';

export default {
  title: 'Components/AwesomeHeader',
  component: AwesomeHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Awesome Header Component

A comprehensive, themeable header component with multiple stunning variants, dark/light mode support, and full responsive design.

## Features

- 🎨 **7 Beautiful Variants**: Modern, Minimal, Glass, Gradient, Corporate, Neon, and Retro styles
- 🌙 **Dark/Light Mode**: Seamless theme switching with system preference support
- 📱 **Fully Responsive**: Mobile-first design with collapsible navigation
- ♿ **Accessibility First**: ARIA labels, focus management, and keyboard navigation
- 🎯 **TypeScript Ready**: Full prop validation and type safety
- ⚡ **Performance Optimized**: CSS variables and efficient re-renders
- 🎭 **Animation Rich**: Smooth transitions and micro-interactions

## Variants

Each variant provides a unique visual style while maintaining consistent functionality:

- **Modern**: Clean, professional design with subtle shadows
- **Minimal**: Stripped-down aesthetic with underline active states
- **Glass**: Glassmorphism effect with backdrop blur
- **Gradient**: Vibrant gradient backgrounds with stunning colors
- **Corporate**: Professional business-ready styling
- **Neon**: Cyberpunk-inspired with glowing effects
- **Retro**: 80s-inspired colorful design with shine animations
        `,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
        { name: 'gradient', value: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['modern', 'minimal', 'glass', 'gradient', 'corporate', 'neon', 'retro'],
      description: 'Visual style variant of the header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'modern' },
      },
    },
    brand: {
      control: 'text',
      description: 'Brand/company name displayed in header',
    },
    showThemeToggle: {
      control: 'boolean',
      description: 'Show/hide the theme toggle switch',
    },
    fixed: {
      control: 'boolean',
      description: 'Make header position fixed at top of page',
    },
    transparent: {
      control: 'boolean',
      description: 'Remove background and borders for overlay effect',
    },
    user: {
      control: 'object',
      description: 'User object for authenticated state',
    },
    navigation: {
      control: 'object',
      description: 'Navigation items array',
    },
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider initialTheme="light">
        <div style={{ minHeight: '100vh', paddingBottom: '2rem' }}>
          <Story />
          <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Demo Content</h2>
            <p>
              This content demonstrates how the header looks with page content below it.
              Try switching between different variants and themes to see the visual impact.
            </p>
            <div style={{ height: '50vh', background: 'var(--color-surface-secondary, #f8fafc)', borderRadius: '8px', padding: '2rem', marginTop: '2rem' }}>
              <h3>Sample Content Area</h3>
              <p>This area shows how the header integrates with your page content.</p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

// Default story
export const Modern = {
  args: {
    variant: 'modern',
    brand: 'WeatherApp',
    showThemeToggle: true,
  },
};

// Minimal variant
export const Minimal = {
  args: {
    variant: 'minimal',
    brand: 'MinimalApp',
    showThemeToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Clean, minimal design with underline active states and reduced visual elements.',
      },
    },
  },
};

// Glass variant
export const Glass = {
  args: {
    variant: 'glass',
    brand: 'GlassyUI',
    showThemeToggle: true,
  },
  parameters: {
    backgrounds: { default: 'gradient' },
    docs: {
      description: {
        story: 'Glassmorphism effect with backdrop blur. Looks stunning over colorful backgrounds.',
      },
    },
  },
};

// Gradient variant
export const Gradient = {
  args: {
    variant: 'gradient',
    brand: 'GradientCorp',
    showThemeToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Vibrant gradient background with beautiful color transitions and white text.',
      },
    },
  },
};

// Corporate variant
export const Corporate = {
  args: {
    variant: 'corporate',
    brand: 'Enterprise Ltd',
    showThemeToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Professional business styling with bold typography and strong brand presence.',
      },
    },
  },
};

// Neon variant
export const Neon = {
  args: {
    variant: 'neon',
    brand: 'CyberTech',
    showThemeToggle: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Cyberpunk-inspired design with neon glows, perfect for tech and gaming applications.',
      },
    },
  },
};

// Retro variant
export const Retro = {
  args: {
    variant: 'retro',
    brand: 'RetroWave',
    showThemeToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story: '80s-inspired colorful design with animated shine effects and bold styling.',
      },
    },
  },
};

// Logged in state
export const LoggedIn = {
  args: {
    variant: 'modern',
    brand: 'WeatherApp',
    showThemeToggle: true,
    user: {
      name: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612e672?w=150&h=150&fit=crop&crop=face',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Header state when user is authenticated, showing avatar and logout option.',
      },
    },
  },
};

// Custom navigation
export const CustomNavigation = {
  args: {
    variant: 'modern',
    brand: 'CustomNav',
    showThemeToggle: true,
    navigation: [
      { 
        label: 'Home', 
        href: '#home', 
        active: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2"/>
            <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/>
          </svg>
        ),
      },
      { 
        label: 'Products', 
        href: '#products',
        badge: 'New',
      },
      { 
        label: 'Services', 
        href: '#services',
        badge: 3,
      },
      { 
        label: 'About', 
        href: '#about',
      },
      { 
        label: 'Contact', 
        href: '#contact',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom navigation items, including icons and badges.',
      },
    },
  },
};

// Fixed header
export const Fixed = {
  args: {
    variant: 'glass',
    brand: 'FixedHeader',
    showThemeToggle: true,
    fixed: true,
  },
  parameters: {
    backgrounds: { default: 'gradient' },
    docs: {
      description: {
        story: 'Fixed positioned header that stays at the top when scrolling.',
      },
    },
  },
};

// Transparent header
export const Transparent = {
  args: {
    variant: 'glass',
    brand: 'TransparentUI',
    showThemeToggle: true,
    transparent: true,
  },
  parameters: {
    backgrounds: { default: 'gradient' },
    docs: {
      description: {
        story: 'Transparent header perfect for hero sections and overlay designs.',
      },
    },
  },
};

// Without theme toggle
export const NoThemeToggle = {
  args: {
    variant: 'modern',
    brand: 'SimpleApp',
    showThemeToggle: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without theme toggle for applications that manage themes differently.',
      },
    },
  },
};

// Mobile focused story
export const Mobile = {
  args: {
    variant: 'modern',
    brand: 'MobileFirst',
    showThemeToggle: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view showing collapsible navigation and optimized layout.',
      },
    },
  },
};

// Playground for testing all combinations
export const Playground = {
  args: {
    variant: 'modern',
    brand: 'Playground',
    showThemeToggle: true,
    fixed: false,
    transparent: false,
    user: null,
    navigation: [
      { label: 'Dashboard', href: '#dashboard', active: true },
      { label: 'Analytics', href: '#analytics', badge: 'Pro' },
      { label: 'Settings', href: '#settings' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all header configurations and properties.',
      },
    },
  },
};