import { fn } from 'storybook/test';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Theme Toggle Component

An animated, accessible theme toggle component with multiple variants and full theme integration.

## Features

- 🎨 **3 Variants**: Switch, Button, and Icon styles
- 🎯 **3 Sizes**: Small, Medium, and Large
- ♿ **Fully Accessible**: ARIA labels, keyboard navigation, and focus management
- ⚡ **Smooth Animations**: Bouncy transitions and subtle micro-interactions
- 🎭 **Theme Integrated**: Seamlessly works with the ThemeProvider
- 📱 **Mobile Optimized**: Touch-friendly and responsive design
- 🌙 **System Detection**: Automatically detects system preference

## Usage

The ThemeToggle component must be used within a ThemeProvider to function properly.
        `,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e293b' },
        { name: 'gradient', value: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['switch', 'button', 'icon'],
      description: 'Visual style variant of the toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'switch' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    showLabels: {
      control: 'boolean',
      description: 'Show/hide sun/moon labels (for switch variant)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="light">
        <div style={{ padding: '2rem' }}>
          <Story />
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            borderRadius: '8px',
            background: 'var(--color-surface-secondary, #f8fafc)',
            color: 'var(--color-text-primary, #1e293b)',
            fontSize: '0.875rem' 
          }}>
            <strong>Theme Demo:</strong> This area demonstrates the current theme. 
            Try toggling to see the changes!
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

// Switch variant (default)
export const Switch = {
  args: {
    variant: 'switch',
    size: 'medium',
    showLabels: true,
    disabled: false,
  },
};

// Button variant
export const Button = {
  args: {
    variant: 'button',
    size: 'medium',
    showLabels: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button style toggle with icon and text label.',
      },
    },
  },
};

// Icon variant
export const Icon = {
  args: {
    variant: 'icon',
    size: 'medium',
    showLabels: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimalist icon-only toggle, perfect for headers and toolbars.',
      },
    },
  },
};

// Small size
export const Small = {
  args: {
    variant: 'switch',
    size: 'small',
    showLabels: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact size perfect for mobile interfaces and tight spaces.',
      },
    },
  },
};

// Large size
export const Large = {
  args: {
    variant: 'switch',
    size: 'large',
    showLabels: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size for better accessibility and prominent placement.',
      },
    },
  },
};

// Without labels
export const NoLabels = {
  args: {
    variant: 'switch',
    size: 'medium',
    showLabels: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch without sun/moon labels for cleaner appearance.',
      },
    },
  },
};

// Disabled state
export const Disabled = {
  args: {
    variant: 'switch',
    size: 'medium',
    showLabels: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state with reduced opacity and no interaction.',
      },
    },
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <ThemeProvider initialTheme="light">
      <div style={{ 
        display: 'grid', 
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        padding: '2rem',
        maxWidth: '800px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-primary, #1e293b)' }}>
            Switch Variant
          </h3>
          <ThemeToggle variant="switch" size="medium" showLabels={true} />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-primary, #1e293b)' }}>
            Button Variant
          </h3>
          <ThemeToggle variant="button" size="medium" showLabels={true} />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-primary, #1e293b)' }}>
            Icon Variant
          </h3>
          <ThemeToggle variant="icon" size="medium" showLabels={false} />
        </div>
        
        <div style={{ 
          gridColumn: '1 / -1',
          marginTop: '2rem',
          padding: '1.5rem',
          borderRadius: '12px',
          background: 'var(--color-surface-secondary, #f8fafc)',
          border: '1px solid var(--color-border-primary, #e2e8f0)',
          textAlign: 'center'
        }}>
          <h4 style={{ 
            marginBottom: '1rem',
            color: 'var(--color-text-primary, #1e293b)',
            fontWeight: '600'
          }}>
            Different Sizes
          </h4>
          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary, #64748b)' }}>Small</span>
              <ThemeToggle variant="switch" size="small" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary, #64748b)' }}>Medium</span>
              <ThemeToggle variant="switch" size="medium" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary, #64748b)' }}>Large</span>
              <ThemeToggle variant="switch" size="large" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available variants and sizes in one view.',
      },
    },
  },
};