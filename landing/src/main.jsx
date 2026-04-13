import React from 'react';
import { VariantPicker } from './VariantPicker.min.js';
import { variants } from './Landing.variants.jsx';
import './styles.css';

const features = [
  {
    title: 'Multi-framework',
    badges: ['React', 'Svelte', 'Vue'],
    description: 'Works with React, Svelte, and Vue. The agent detects your stack and generates appropriate code.'
  },
  {
    title: 'Real context preview',
    badges: [],
    description: 'Variants render inside your actual page, not a sandbox. What you see is what you get.'
  },
  {
    title: 'In-browser picker',
    badges: [],
    description: 'A minimal floating overlay lets you navigate variants without leaving the page.'
  },
  {
    title: 'Four distinct approaches',
    badges: [],
    description: 'Not skin-deep variations. The agent explores different structural and conceptual directions.'
  }
];

const FeatureSection = () => (
  <section>
    <div className="container">
      <h2>What you get</h2>
      <div className="features">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <h3>
              {f.title}
              {f.badges.map(b => <span className="badge" key={b}>{b}</span>)}
            </h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="links">
        <a href="https://github.com/goerll/varium">GitHub</a>
        <a href="https://www.npmjs.com/package/@varium/core">npm</a>
        <a href="https://github.com/goerll/varium/issues">Issues</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <>
      {/* VARIUM:START slot="landing-hero" */}
      <VariantPicker variants={variants} slot="landing-hero" />
      {/* VARIUM:END */}
      <FeatureSection />
      <Footer />
    </>
  );
}