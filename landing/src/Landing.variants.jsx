const TypewriterHero = () => (
  <header>
    <div class="container">
      <nav>
        <a href="https://github.com/goerll/varium">GitHub</a>
        <a href="https://www.npmjs.com/package/@varium/core">npm</a>
      </nav>

      <div class="hero">
        <h1>Varium<span>.</span></h1>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px' }}>
          {'> '}Agent-driven UI exploration
        </p>
        <div class="install">
          <span class="prompt">$</span>
          <code>npx skills add https://github.com/goerll/varium --skill varium</code>
        </div>
      </div>
    </div>
  </header>
);

const MinimalHero = () => (
  <header style={{ paddingTop: '120px', paddingBottom: '120px' }}>
    <div class="container">
      <nav style={{ marginBottom: '120px' }}>
        <a href="https://github.com/goerll/varium">GitHub</a>
        <a href="https://www.npmjs.com/package/@varium/core">npm</a>
      </nav>

      <div class="hero" style={{ marginBottom: 0, textAlign: 'center' }}>
        <h1 style={{ fontSize: '72px', maxWidth: '100%' }}>Varium</h1>
        <p style={{ maxWidth: '100%', margin: '24px auto 0', fontSize: '18px', color: '#666' }}>
          Generate. Review. Commit.
        </p>
        <div class="install" style={{ marginTop: '40px' }}>
          <span class="prompt">$</span>
          <code>npx skills add https://github.com/goerll/varium --skill varium</code>
        </div>
      </div>
    </div>
  </header>
);

const BoldHero = () => (
  <header>
    <div class="container">
      <nav>
        <a href="https://github.com/goerll/varium">GitHub</a>
        <a href="https://www.npmjs.com/package/@varium/core">npm</a>
      </nav>

      <div class="hero" style={{ display: 'flex', alignItems: 'center', gap: '80px', marginBottom: '120px' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '64px', lineHeight: 1 }}>
            Design variants<br />
            <span style={{ color: '#525252' }}>for every direction.</span>
          </h1>
          <p style={{ marginTop: '24px', maxWidth: '400px' }}>
            Ask an agent to explore multiple UI approaches, review them in your browser, pick the winner.
          </p>
          <div class="install" style={{ marginTop: '32px' }}>
            <span class="prompt">$</span>
            <code>npm i @varium/core</code>
          </div>
        </div>
        <div style={{ flex: 1, fontFamily: "'JetBrains Mono', monospace", fontSize: '13px", color: '#525252' }}>
          <div style={{ marginBottom: '8px' }}>// Ask the agent</div>
          <div style={{ color: '#a3a3a3', marginBottom: '16px' }}>
            "make a pricing section"
          </div>
          <div style={{ marginBottom: '8px' }}>// Get 4 variants</div>
          <div style={{ color: '#a3a3a3', marginBottom: '16px' }}>
            Dark / Editorial / Minimal / Bold
          </div>
          <div style={{ marginBottom: '8px' }}>// Pick one</div>
          <div style={{ color: '#86efac' }}>
            → Editorial
          </div>
        </div>
      </div>
    </div>
  </header>
);

const SplitHero = () => (
  <header style={{ paddingBottom: '40px' }}>
    <div class="container">
      <nav>
        <a href="https://github.com/goerll/varium">GitHub</a>
        <a href="https://www.npmjs.com/package/@varium/core">npm</a>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Varium.</h1>
          <p style={{ fontSize: '18px', color: '#737373', marginBottom: '32px' }}>
            Stop deciding in the dark. Generate multiple design approaches, see them in context, pick what fits.
          </p>
          <div class="install">
            <span class="prompt">$</span>
            <code>npx skills add https://github.com/goerll/varium --skill varium</code>
          </div>
        </div>
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>
            <div style={{ color: '#525252', marginBottom: '8px' }}>Your page with Varium:</div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #1f1f1f' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#262626' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#404040' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#262626' }} />
              <span style={{ color: '#666', marginLeft: 'auto', fontSize: '11px' }}>4 variants</span>
            </div>
            <div style={{ padding: '16px 0', color: '#a3a3a3' }}>
              [Live preview of your component here]
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export const variants = {
  'Typewriter': TypewriterHero,
  'Minimal': MinimalHero,
  'Bold': BoldHero,
  'Split': SplitHero,
};