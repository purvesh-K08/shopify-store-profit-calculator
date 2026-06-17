/**
 * App Component — Root of the Shopify Profit Calculator
 * 
 * Manages the global dark/light theme state and assembles all sections:
 *   1. Header (sticky nav + theme toggle)
 *   2. Hero (landing section)
 *   3. Calculator (inputs + results)
 *   4. ProfitTips (educational content)
 *   5. Footer (credits + Digital Heroes)
 */
import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Calculator from './components/Calculator/Calculator.jsx';
import ProfitTips from './components/ProfitTips/ProfitTips.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  /**
   * Theme state — persisted in localStorage.
   * On first load, respects the user's OS preference via prefers-color-scheme.
   */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('profitcalc-theme');
    if (saved) return saved === 'dark';
    // Respect OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Sync the data-theme attribute on <html> whenever isDarkMode changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('profitcalc-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Calculator />
        <ProfitTips />
      </main>
      <Footer />
    </div>
  );
}

export default App;
