import React from 'react';
import WeatherCard from './WeatherCard';

// Default export: configures the story in Storybook
export default {
  title: 'Organisms/WeatherCard', // how it appears in the sidebar
  component: WeatherCard,
};

// Named exports: individual stories
export const Default = () => (
  <WeatherCard 
    temperature={22} 
    condition="Sunny" 
    city="Cape Town" 
  />
);

export const Rainy = () => (
  <WeatherCard 
    temperature={16} 
    condition="Rainy" 
    city="Johannesburg" 
  />
);
