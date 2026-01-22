import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import { breatheMantineTheme } from '../theme';
import '@mantine/core/styles.css';
import {
  CATEGORICAL_PALETTE,
  CATEGORICAL_COLORS,
  SEQUENTIAL_BLUE,
  SEQUENTIAL_GREEN,
  DIVERGING_PALETTE,
  DIVERGING_COLORS,
  GRADIENTS,
} from '../../../external/src/utils/chartColors';

const ColorPalettesShowcase = () => (
  <MantineProvider theme={breatheMantineTheme}>
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'Lexend', marginBottom: '16px' }}>Data Visualization Color Palettes</h1>
      <p style={{ color: '#5A6C7D', marginBottom: '48px', fontSize: '16px' }}>
        Color systems for charts, graphs, and data visualization
      </p>

      {/* Categorical Palette */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '12px' }}>Categorical Palette</h2>
        <p style={{ color: '#5A6C7D', marginBottom: '24px' }}>
          For discrete categories (departments, products, regions) - 10 distinct colors
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          {Object.entries(CATEGORICAL_PALETTE).map(([name, color]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  backgroundColor: color,
                  borderRadius: '8px',
                  marginBottom: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', textTransform: 'capitalize' }}>
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div style={{ fontSize: '11px', color: '#7B8A99', fontFamily: 'monospace' }}>{color}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#F8F9FA', padding: '16px', borderRadius: '8px', fontSize: '14px', color: '#5A6C7D' }}>
          <strong>When to use:</strong> Pie charts, bar charts comparing categories, line charts with multiple series.
          Colors are perceptually distinct and colorblind-safe.
        </div>
      </section>

      {/* Sequential Palettes */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '12px' }}>Sequential Palette</h2>
        <p style={{ color: '#5A6C7D', marginBottom: '24px' }}>
          For ordered data (low to high values, progression)
        </p>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'Lexend', fontSize: '16px', marginBottom: '12px' }}>Blue Sequential (Low → High)</h3>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {SEQUENTIAL_BLUE.map((color, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: '80px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    marginBottom: '8px',
                  }}
                />
                <div style={{ fontSize: '10px', color: '#7B8A99', fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#7B8A99', textAlign: 'center', marginBottom: '8px' }}>
            ← Lightest (Low) • • • • • • Darkest (High) →
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'Lexend', fontSize: '16px', marginBottom: '12px' }}>Green Sequential (Good → Better → Best)</h3>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {SEQUENTIAL_GREEN.map((color, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: '80px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    marginBottom: '8px',
                  }}
                />
                <div style={{ fontSize: '10px', color: '#7B8A99', fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#7B8A99', textAlign: 'center', marginBottom: '8px' }}>
            ← Lightest (Good) • • • • • • Darkest (Best) →
          </div>
        </div>

        <div style={{ background: '#F8F9FA', padding: '16px', borderRadius: '8px', fontSize: '14px', color: '#5A6C7D' }}>
          <strong>When to use:</strong> Heat maps, choropleth maps, single-metric dashboards showing intensity.
          Light = low values, Dark = high values.
        </div>
      </section>

      {/* Diverging Palette */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '12px' }}>Diverging Palette</h2>
        <p style={{ color: '#5A6C7D', marginBottom: '24px' }}>
          For data with a meaningful midpoint (positive/negative, above/below target)
        </p>
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'Lexend', fontSize: '16px', marginBottom: '12px' }}>
            Red ← Neutral → Green (Bad ← OK → Good)
          </h3>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {Object.entries(DIVERGING_PALETTE).map(([name, color]) => (
              <div key={name} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: '80px',
                    backgroundColor: color,
                    borderRadius: '4px',
                    marginBottom: '8px',
                  }}
                />
                <div style={{ fontSize: '11px', fontWeight: '600', marginBottom: '2px', textTransform: 'capitalize' }}>
                  {name}
                </div>
                <div style={{ fontSize: '9px', color: '#7B8A99', fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#7B8A99', textAlign: 'center', marginBottom: '8px' }}>
            ← Worst (Red) • • • • Neutral • • • • Best (Green) →
          </div>
        </div>
        <div style={{ background: '#F8F9FA', padding: '16px', borderRadius: '8px', fontSize: '14px', color: '#5A6C7D' }}>
          <strong>When to use:</strong> Variance analysis, performance vs target, survey responses (disagree → neutral → agree).
          Always center neutral at the midpoint.
        </div>

        <div style={{ marginTop: '24px', background: '#E8F2FA', padding: '16px', borderRadius: '8px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Example: Performance vs Target</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ width: '100%', height: '60px', backgroundColor: DIVERGING_PALETTE.bad, borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600' }}>
                -15%
              </div>
              <div style={{ fontSize: '12px' }}>Below Target</div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ width: '100%', height: '60px', backgroundColor: DIVERGING_PALETTE.neutral, borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', border: '2px solid #E8EDF2' }}>
                +2%
              </div>
              <div style={{ fontSize: '12px' }}>At Target</div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ width: '100%', height: '60px', backgroundColor: DIVERGING_PALETTE.great, borderRadius: '6px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600' }}>
                +28%
              </div>
              <div style={{ fontSize: '12px' }}>Above Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '12px' }}>Gradient Definitions</h2>
        <p style={{ color: '#5A6C7D', marginBottom: '24px' }}>
          For use in bar charts and area charts
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          {Object.entries(GRADIENTS).map(([name, [start, end]]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  background: `linear-gradient(90deg, ${start}, ${end})`,
                  borderRadius: '8px',
                  marginBottom: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', textTransform: 'capitalize' }}>
                {name}
              </div>
              <div style={{ fontSize: '10px', color: '#7B8A99', fontFamily: 'monospace' }}>
                {start} → {end}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility Guidelines */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '12px' }}>Color Accessibility Guidelines</h2>
        <p style={{ color: '#5A6C7D', marginBottom: '24px' }}>
          Ensuring charts are readable for colorblind users
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ background: '#E8F8F5', padding: '20px', borderRadius: '8px', border: '2px solid #27AE60' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#27AE60' }}>✅ Do's</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Use patterns or textures in addition to color</li>
              <li>Label data directly instead of relying only on legend colors</li>
              <li>Test with colorblind simulators</li>
              <li>Use high contrast combinations</li>
              <li>Add labels, patterns, or icons in addition to color</li>
            </ul>
          </div>

          <div style={{ background: '#FDEDEC', padding: '20px', borderRadius: '8px', border: '2px solid #E74C3C' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#E74C3C' }}>❌ Don'ts</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Don't use red and green together (colorblind issue)</li>
              <li>Don't rely on color alone to convey information</li>
              <li>Don't use low contrast color combinations</li>
              <li>Don't use more than 10 colors in a single chart</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '24px', background: '#F8F9FA', padding: '16px', borderRadius: '8px', fontSize: '14px', color: '#5A6C7D' }}>
          <strong>Best Practice:</strong> Minimum contrast ratio: 4.5:1 for text, 3:1 for UI elements.
        </div>
      </section>
    </div>
  </MantineProvider>
);

const meta = {
  title: 'Internal/Mantine/Color Palettes',
  component: ColorPalettesShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color palette system for data visualization in the Breathe Design System. Includes categorical, sequential, diverging palettes, and gradients.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalettesShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPalettes: Story = {};

export const CategoricalOnly: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '40px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '24px' }}>Categorical Palette</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {CATEGORICAL_COLORS.map((color, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: '120px',
                  backgroundColor: color,
                  borderRadius: '8px',
                  marginBottom: '8px',
                }}
              />
              <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </MantineProvider>
  ),
};

export const SequentialOnly: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '40px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '24px' }}>Sequential Palettes</h2>
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px' }}>Blue Sequential</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            {SEQUENTIAL_BLUE.map((color, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: '120px',
                    backgroundColor: color,
                    borderRadius: '8px',
                    marginBottom: '8px',
                  }}
                />
                <div style={{ fontSize: '10px', fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '16px' }}>Green Sequential</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            {SEQUENTIAL_GREEN.map((color, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: '120px',
                    backgroundColor: color,
                    borderRadius: '8px',
                    marginBottom: '8px',
                  }}
                />
                <div style={{ fontSize: '10px', fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MantineProvider>
  ),
};

export const DivergingOnly: Story = {
  render: () => (
    <MantineProvider theme={breatheMantineTheme}>
      <div style={{ padding: '40px' }}>
        <h2 style={{ fontFamily: 'Lexend', marginBottom: '24px' }}>Diverging Palette</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          {DIVERGING_COLORS.map((color, index) => (
            <div key={index} style={{ flex: 1, textAlign: 'center' }}>
              <div
                style={{
                  height: '120px',
                  backgroundColor: color,
                  borderRadius: '8px',
                  marginBottom: '8px',
                }}
              />
              <div style={{ fontSize: '10px', fontFamily: 'monospace' }}>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </MantineProvider>
  ),
};
