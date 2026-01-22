import type { Meta, StoryObj } from '@storybook/react';
import { foundation, tokens } from './colors';

/**
 * Color swatch component
 */
const ColorSwatch = ({
  color,
  name,
  description
}: {
  color: string;
  name: string;
  description?: string;
}) => (
  <div style={{ marginBottom: '16px' }}>
    <div
      style={{
        width: '100%',
        height: '80px',
        backgroundColor: color,
        borderRadius: '8px',
        marginBottom: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: color === 'transparent' ? '2px dashed #E8EDF2' : 'none',
      }}
    />
    <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>
      {name}
    </div>
    {description && (
      <div style={{ fontSize: '11px', color: '#7B8A99', marginBottom: '4px' }}>
        {description}
      </div>
    )}
    <div style={{ fontSize: '11px', color: '#A8B5C2', fontFamily: 'monospace' }}>
      {color}
    </div>
  </div>
);

/**
 * Color scale component (for foundation colors)
 */
const ColorScale = ({
  name,
  scale
}: {
  name: string;
  scale: Record<string, string>;
}) => (
  <div style={{ marginBottom: '48px' }}>
    <h3 style={{
      fontFamily: 'Lexend, sans-serif',
      marginBottom: '16px',
      fontSize: '18px',
      textTransform: 'capitalize'
    }}>
      {name}
    </h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '12px'
    }}>
      {Object.entries(scale).map(([shade, color]) => (
        <div key={shade}>
          <div
            style={{
              width: '100%',
              height: '80px',
              backgroundColor: color,
              borderRadius: '6px',
              marginBottom: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          />
          <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>
            {shade}
          </div>
          <div style={{ fontSize: '10px', color: '#7B8A99', fontFamily: 'monospace' }}>
            {color}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Main showcase component
 */
const ColorShowcase = () => (
  <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
    <h1 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '32px' }}>
      Breathe Design System - Color Tokens
    </h1>
    <p style={{ color: '#5A6C7D', marginBottom: '48px', fontSize: '16px' }}>
      Two-tier color system: Foundation scales + Semantic tokens
    </p>

    {/* Introduction */}
    <section style={{
      marginBottom: '64px',
      background: '#E8F2FA',
      padding: '24px',
      borderRadius: '12px'
    }}>
      <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>How to Use</h2>
      <div style={{ fontSize: '14px', color: '#2D4A5F', lineHeight: '1.6' }}>
        <p style={{ marginBottom: '12px' }}>
          <strong>Foundation:</strong> Raw color scales (blue/500, neutral/700) - use for data viz or when you need specific shades
        </p>
        <p style={{ marginBottom: '12px' }}>
          <strong>Tokens:</strong> Semantic, usage-based (text.primary, action.primary) - always use these for UI components
        </p>
        <pre style={{
          background: '#F8FAFB',
          padding: '12px',
          borderRadius: '6px',
          fontSize: '13px',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
{`import { tokens, foundation } from '@breathe-ds/core';

// ✅ Use semantic tokens for UI
background: tokens.action.primary
color: tokens.text.inverse

// Use foundation for specific shades
background: foundation.blue[300]`}
        </pre>
      </div>
    </section>

    {/* Semantic Tokens Section */}
    <section style={{ marginBottom: '64px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Semantic Tokens (Use These!)
      </h2>
      <p style={{ color: '#5A6C7D', marginBottom: '32px', fontSize: '15px' }}>
        Purpose-based tokens that describe usage. Use these in your components for self-documenting, maintainable code.
      </p>

      {/* Text Colors */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Text Colors
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          <ColorSwatch color={tokens.text.primary} name="text.primary" description="Main body text, headings" />
          <ColorSwatch color={tokens.text.secondary} name="text.secondary" description="Secondary text" />
          <ColorSwatch color={tokens.text.tertiary} name="text.tertiary" description="De-emphasized text" />
          <ColorSwatch color={tokens.text.disabled} name="text.disabled" description="Disabled text" />
          <ColorSwatch color={tokens.text.placeholder} name="text.placeholder" description="Placeholder text" />
          <ColorSwatch color={tokens.text.inverse} name="text.inverse" description="Text on dark backgrounds" />
          <ColorSwatch color={tokens.text.brand} name="text.brand" description="Brand-colored text" />
          <ColorSwatch color={tokens.text.link} name="text.link" description="Links" />
          <ColorSwatch color={tokens.text.linkHover} name="text.linkHover" description="Link hover state" />
        </div>
      </div>

      {/* Surface Colors */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Surface/Background Colors
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          <ColorSwatch color={tokens.surface.page} name="surface.page" description="Main page background" />
          <ColorSwatch color={tokens.surface.default} name="surface.default" description="Default card background" />
          <ColorSwatch color={tokens.surface.elevated} name="surface.elevated" description="Elevated surfaces" />
          <ColorSwatch color={tokens.surface.hover} name="surface.hover" description="Hover state" />
          <ColorSwatch color={tokens.surface.pressed} name="surface.pressed" description="Pressed state" />
          <ColorSwatch color={tokens.surface.selected} name="surface.selected" description="Selected state" />
          <ColorSwatch color={tokens.surface.disabled} name="surface.disabled" description="Disabled surface" />
          <ColorSwatch color={tokens.surface.overlay} name="surface.overlay" description="Modal overlay" />
        </div>
      </div>

      {/* Border Colors */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Border Colors
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          <ColorSwatch color={tokens.border.default} name="border.default" description="Default borders" />
          <ColorSwatch color={tokens.border.strong} name="border.strong" description="Emphasized borders" />
          <ColorSwatch color={tokens.border.subtle} name="border.subtle" description="Subtle borders" />
          <ColorSwatch color={tokens.border.brand} name="border.brand" description="Brand borders" />
          <ColorSwatch color={tokens.border.disabled} name="border.disabled" description="Disabled borders" />
          <ColorSwatch color={tokens.border.focus} name="border.focus" description="Focus state" />
          <ColorSwatch color={tokens.border.error} name="border.error" description="Error state" />
        </div>
      </div>

      {/* Action Colors */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Action/Interactive Colors
        </h3>

        <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#2D4A5F' }}>Primary Actions</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <ColorSwatch color={tokens.action.primary} name="action.primary" description="Primary button default" />
          <ColorSwatch color={tokens.action.primaryHover} name="action.primaryHover" description="Primary button hover" />
          <ColorSwatch color={tokens.action.primaryActive} name="action.primaryActive" description="Primary button active" />
          <ColorSwatch color={tokens.action.primaryDisabled} name="action.primaryDisabled" description="Primary button disabled" />
          <ColorSwatch color={tokens.action.primarySubtle} name="action.primarySubtle" description="Subtle primary background" />
          <ColorSwatch color={tokens.action.primarySubtleHover} name="action.primarySubtleHover" description="Subtle primary hover" />
        </div>

        <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#2D4A5F' }}>Secondary Actions</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <ColorSwatch color={tokens.action.secondary} name="action.secondary" description="Secondary default" />
          <ColorSwatch color={tokens.action.secondaryHover} name="action.secondaryHover" description="Secondary hover" />
          <ColorSwatch color={tokens.action.secondaryActive} name="action.secondaryActive" description="Secondary active" />
        </div>

        <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#2D4A5F' }}>Tertiary/Ghost Actions</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          <ColorSwatch color={tokens.action.tertiary} name="action.tertiary" description="Ghost button default" />
          <ColorSwatch color={tokens.action.tertiaryHover} name="action.tertiaryHover" description="Ghost button hover" />
          <ColorSwatch color={tokens.action.tertiaryActive} name="action.tertiaryActive" description="Ghost button active" />
        </div>
      </div>

      {/* Feedback Colors */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Feedback/Status Colors
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {/* Success */}
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#27AE60' }}>Success</h4>
            <ColorSwatch color={tokens.feedback.success} name="success" description="Success indicator" />
            <ColorSwatch color={tokens.feedback.successSubtle} name="successSubtle" description="Success background" />
            <ColorSwatch color={tokens.feedback.successBorder} name="successBorder" description="Success border" />
            <ColorSwatch color={tokens.feedback.successText} name="successText" description="Success text" />
          </div>

          {/* Warning */}
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#E67E22' }}>Warning</h4>
            <ColorSwatch color={tokens.feedback.warning} name="warning" description="Warning indicator" />
            <ColorSwatch color={tokens.feedback.warningSubtle} name="warningSubtle" description="Warning background" />
            <ColorSwatch color={tokens.feedback.warningBorder} name="warningBorder" description="Warning border" />
            <ColorSwatch color={tokens.feedback.warningText} name="warningText" description="Warning text" />
          </div>

          {/* Error */}
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#E74C3C' }}>Error</h4>
            <ColorSwatch color={tokens.feedback.error} name="error" description="Error indicator" />
            <ColorSwatch color={tokens.feedback.errorSubtle} name="errorSubtle" description="Error background" />
            <ColorSwatch color={tokens.feedback.errorBorder} name="errorBorder" description="Error border" />
            <ColorSwatch color={tokens.feedback.errorText} name="errorText" description="Error text" />
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '12px', color: '#2980B9' }}>Info</h4>
            <ColorSwatch color={tokens.feedback.info} name="info" description="Info indicator" />
            <ColorSwatch color={tokens.feedback.infoSubtle} name="infoSubtle" description="Info background" />
            <ColorSwatch color={tokens.feedback.infoBorder} name="infoBorder" description="Info border" />
            <ColorSwatch color={tokens.feedback.infoText} name="infoText" description="Info text" />
          </div>
        </div>
      </div>

      {/* Accent Colors */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Accent Colors
        </h3>
        <p style={{ color: '#7B8A99', fontSize: '14px', marginBottom: '16px' }}>
          Use sparingly for celebration, special emphasis, or decorative elements
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          <ColorSwatch color={tokens.accent.gold} name="accent.gold" description="Celebration gold" />
          <ColorSwatch color={tokens.accent.goldSubtle} name="accent.goldSubtle" description="Gold background" />
          <ColorSwatch color={tokens.accent.peach} name="accent.peach" description="Warm peach" />
          <ColorSwatch color={tokens.accent.peachSubtle} name="accent.peachSubtle" description="Peach background" />
        </div>
      </div>

      {/* Gradients */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '20px' }}>
          Gradients
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
          <div>
            <div
              style={{
                height: '100px',
                background: tokens.gradient.primary,
                borderRadius: '8px',
                marginBottom: '8px',
              }}
            />
            <div style={{ fontSize: '13px', fontWeight: '600' }}>gradient.primary</div>
            <div style={{ fontSize: '11px', color: '#7B8A99' }}>Primary brand gradient</div>
          </div>
          <div>
            <div
              style={{
                height: '100px',
                background: tokens.gradient.chart.primary,
                borderRadius: '8px',
                marginBottom: '8px',
              }}
            />
            <div style={{ fontSize: '13px', fontWeight: '600' }}>gradient.chart.primary</div>
            <div style={{ fontSize: '11px', color: '#7B8A99' }}>Chart gradient (blue)</div>
          </div>
          <div>
            <div
              style={{
                height: '100px',
                background: tokens.gradient.chart.secondary,
                borderRadius: '8px',
                marginBottom: '8px',
              }}
            />
            <div style={{ fontSize: '13px', fontWeight: '600' }}>gradient.chart.secondary</div>
            <div style={{ fontSize: '11px', color: '#7B8A99' }}>Chart gradient (peach)</div>
          </div>
          <div>
            <div
              style={{
                height: '100px',
                background: tokens.gradient.chart.tertiary,
                borderRadius: '8px',
                marginBottom: '8px',
              }}
            />
            <div style={{ fontSize: '13px', fontWeight: '600' }}>gradient.chart.tertiary</div>
            <div style={{ fontSize: '11px', color: '#7B8A99' }}>Chart gradient (purple)</div>
          </div>
        </div>
      </div>
    </section>

    {/* Foundation Colors Section */}
    <section style={{ marginBottom: '64px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #E67E22',
        paddingBottom: '12px'
      }}>
        Foundation Color Scales
      </h2>
      <p style={{ color: '#5A6C7D', marginBottom: '32px', fontSize: '15px' }}>
        Raw color values organized in scales (0-900). Use when you need direct access to specific shades for data visualization or custom components.
      </p>

      <ColorScale name="Blue (Primary Brand)" scale={foundation.blue} />
      <ColorScale name="Neutral" scale={foundation.neutral} />
      <ColorScale name="Green (Success)" scale={foundation.green} />
      <ColorScale name="Orange (Warning)" scale={foundation.orange} />
      <ColorScale name="Red (Error)" scale={foundation.red} />
      <ColorScale name="Light Blue (Info)" scale={foundation.lightBlue} />
      <ColorScale name="Gold (Accent)" scale={foundation.gold} />
      <ColorScale name="Peach (Accent)" scale={foundation.peach} />

      <h3 style={{ fontFamily: 'Lexend, sans-serif', marginTop: '48px', marginBottom: '24px', fontSize: '22px' }}>
        Data Visualization Colors
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
        <ColorScale name="Purple" scale={foundation.purple} />
        <ColorScale name="Teal" scale={foundation.teal} />
        <ColorScale name="Yellow" scale={foundation.yellow} />
        <ColorScale name="Pink" scale={foundation.pink} />
        <ColorScale name="Cyan" scale={foundation.cyan} />
      </div>
      <div style={{ marginTop: '24px' }}>
        <ColorScale name="Lime" scale={foundation.lime} />
      </div>
    </section>

    {/* Best Practices */}
    <section style={{ marginBottom: '64px' }}>
      <h2 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '24px', fontSize: '28px' }}>
        Best Practices
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div style={{ background: '#E8F8F5', padding: '24px', borderRadius: '12px', border: '2px solid #27AE60' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#27AE60' }}>✅ Do</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
            <li>Use semantic tokens for all UI components</li>
            <li>Use foundation colors for data visualization</li>
            <li>Document color choices in components</li>
            <li>Test contrast ratios for accessibility</li>
            <li>Use tokens.text.primary, not foundation.neutral[700]</li>
          </ul>
        </div>

        <div style={{ background: '#FFEBEE', padding: '24px', borderRadius: '12px', border: '2px solid #E74C3C' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#E74C3C' }}>❌ Don't</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
            <li>Don't use hex values directly in components</li>
            <li>Don't use foundation colors for UI elements</li>
            <li>Don't create custom color variations</li>
            <li>Don't use colors.primary.main (deprecated)</li>
            <li>Don't mix old and new token structures</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const meta = {
  title: 'Foundation/Color Tokens',
  component: ColorShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color token system for the Breathe Design System. Two-tier structure: Foundation scales (raw colors) + Semantic tokens (usage-based).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};

export const SemanticTokensOnly: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '32px' }}>Semantic Tokens</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div>
          <h3 style={{ marginBottom: '16px' }}>Text</h3>
          {Object.entries(tokens.text).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '12px' }}>
              <div style={{ width: '100%', height: '40px', background: value, borderRadius: '4px', marginBottom: '4px' }} />
              <div style={{ fontSize: '12px' }}>{key}</div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ marginBottom: '16px' }}>Actions</h3>
          {Object.entries(tokens.action).slice(0, 6).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '12px' }}>
              <div style={{ width: '100%', height: '40px', background: value, borderRadius: '4px', marginBottom: '4px', border: value === 'transparent' ? '1px dashed #ccc' : 'none' }} />
              <div style={{ fontSize: '12px' }}>{key}</div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ marginBottom: '16px' }}>Surface</h3>
          {Object.entries(tokens.surface).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '12px' }}>
              <div style={{ width: '100%', height: '40px', background: value, borderRadius: '4px', marginBottom: '4px', border: '1px solid #E8EDF2' }} />
              <div style={{ fontSize: '12px' }}>{key}</div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ marginBottom: '16px' }}>Border</h3>
          {Object.entries(tokens.border).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '12px' }}>
              <div style={{ width: '100%', height: '40px', background: value, borderRadius: '4px', marginBottom: '4px' }} />
              <div style={{ fontSize: '12px' }}>{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const FoundationScalesOnly: Story = {
  render: () => (
    <div style={{ padding: '40px' }}>
      <h1 style={{ marginBottom: '32px' }}>Foundation Color Scales</h1>
      <ColorScale name="Blue" scale={foundation.blue} />
      <ColorScale name="Neutral" scale={foundation.neutral} />
      <ColorScale name="Green" scale={foundation.green} />
    </div>
  ),
};
