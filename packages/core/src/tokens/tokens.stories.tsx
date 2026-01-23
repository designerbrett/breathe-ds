import type { Meta, StoryObj } from '@storybook/react';
import { foundation, tokens } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { radius, foundationRadius, border, borderWidth } from './radius';
import { shadows } from './shadows';
import { height, foundationHeight } from './height';
import { animation, duration, easing } from './animation';
import { opacity } from './opacity';
import { zIndex } from './z-index';

/**
 * Comprehensive Design Tokens Showcase
 */
const TokensShowcase = () => (
  <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
    <h1 style={{ fontFamily: 'Lexend, sans-serif', marginBottom: '16px', fontSize: '32px' }}>
      Breathe Design System Tokens
    </h1>
    <p style={{ color: '#5A6C7D', marginBottom: '48px', fontSize: '16px' }}>
      Complete design token system covering colors, typography, spacing, borders, shadows, and more
    </p>

    {/* Quick Navigation */}
    <nav style={{
      background: '#E8F2FA',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '48px'
    }}>
      <h3 style={{ marginBottom: '12px', fontSize: '16px' }}>Jump to:</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        <a href="#colors" style={{ color: '#2B79B9', textDecoration: 'none' }}>Colors</a>
        <a href="#typography" style={{ color: '#2B79B9', textDecoration: 'none' }}>Typography</a>
        <a href="#spacing" style={{ color: '#2B79B9', textDecoration: 'none' }}>Spacing</a>
        <a href="#borders" style={{ color: '#2B79B9', textDecoration: 'none' }}>Borders</a>
        <a href="#height" style={{ color: '#2B79B9', textDecoration: 'none' }}>Height</a>
        <a href="#shadows" style={{ color: '#2B79B9', textDecoration: 'none' }}>Shadows</a>
        <a href="#animation" style={{ color: '#2B79B9', textDecoration: 'none' }}>Animation</a>
        <a href="#opacity" style={{ color: '#2B79B9', textDecoration: 'none' }}>Opacity</a>
      </div>
    </nav>

    {/* COLORS */}
    <section id="colors" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Colors
      </h2>
      <p style={{ color: '#5A6C7D', marginBottom: '32px' }}>
        Two-tier system: Foundation scales for raw colors + Semantic tokens for usage-based colors
      </p>

      {/* Semantic Tokens Preview */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Semantic Color Tokens</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Text</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[tokens.text.primary, tokens.text.secondary, tokens.text.tertiary].map((color, i) => (
                <div key={i} style={{ width: '40px', height: '40px', background: color, borderRadius: '6px' }} />
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Actions</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[tokens.action.primary, tokens.action.primaryHover, tokens.action.primaryActive].map((color, i) => (
                <div key={i} style={{ width: '40px', height: '40px', background: color, borderRadius: '6px' }} />
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Feedback</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[tokens.feedback.success, tokens.feedback.warning, tokens.feedback.error].map((color, i) => (
                <div key={i} style={{ width: '40px', height: '40px', background: color, borderRadius: '6px' }} />
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Surface</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[tokens.surface.page, tokens.surface.elevated, tokens.surface.selected].map((color, i) => (
                <div key={i} style={{ width: '40px', height: '40px', background: color, borderRadius: '6px', border: '1px solid #E8EDF2' }} />
              ))}
            </div>
          </div>
        </div>
        <div style={{
          marginTop: '16px',
          padding: '12px',
          background: '#F8FAFB',
          borderRadius: '6px',
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
          import &#123; tokens &#125; from '@breathe-ds/core';<br/>
          color: tokens.text.primary
        </div>
      </div>

      {/* Foundation Colors Preview */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Foundation Color Scales</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { name: 'Blue', scale: foundation.blue },
            { name: 'Neutral', scale: foundation.neutral },
            { name: 'Green', scale: foundation.green }
          ].map(({ name, scale }) => (
            <div key={name}>
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>{name}</div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {Object.values(scale).map((color, i) => (
                  <div key={i} style={{ flex: 1, height: '40px', background: color, borderRadius: '2px' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '16px',
          padding: '12px',
          background: '#F8FAFB',
          borderRadius: '6px',
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
          import &#123; foundation &#125; from '@breathe-ds/core';<br/>
          background: foundation.blue[500]
        </div>
      </div>
    </section>

    {/* TYPOGRAPHY */}
    <section id="typography" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Typography
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Font Families</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {Object.entries(typography.fontFamily).map(([key, value]) => (
              <div key={key} style={{ padding: '12px', background: '#F8FAFB', borderRadius: '6px' }}>
                <div style={{ fontSize: '11px', color: '#7B8A99', marginBottom: '4px' }}>{key}</div>
                <div style={{ fontFamily: value as string, fontSize: '16px', fontWeight: '600' }}>
                  The quick brown fox
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Font Weights</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {Object.entries(typography.fontWeight).map(([key, value]) => (
              <div key={key} style={{ padding: '12px', background: '#F8FAFB', borderRadius: '6px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: value }}>Aa</div>
                <div style={{ fontSize: '10px', color: '#7B8A99', marginTop: '4px' }}>{key} ({value})</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; typography &#125; from '@breathe-ds/core';<br/>
        font-family: typography.fontFamily.body;<br/>
        font-weight: typography.fontWeight.semibold;
      </div>
    </section>

    {/* SPACING */}
    <section id="spacing" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Spacing
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>External (8px base)</h3>
          {Object.entries(spacing.external).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '80px', fontFamily: 'monospace', fontSize: '12px', fontWeight: '600' }}>
                {key}
              </div>
              <div style={{ width: value, height: '24px', background: '#2B79B9', borderRadius: '4px' }} />
              <div style={{ fontSize: '12px', color: '#7B8A99' }}>{value}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Internal (4px base)</h3>
          {Object.entries(spacing.internal).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '80px', fontFamily: 'monospace', fontSize: '12px', fontWeight: '600' }}>
                {key}
              </div>
              <div style={{ width: value, height: '24px', background: '#2D4A5F', borderRadius: '4px' }} />
              <div style={{ fontSize: '12px', color: '#7B8A99' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '24px',
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; spacing &#125; from '@breathe-ds/core';<br/>
        padding: spacing.external.md; // 16px
      </div>
    </section>

    {/* BORDERS */}
    <section id="borders" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Borders
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Border Width</h3>
          {Object.entries(borderWidth).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
                {key} - {value}
              </div>
              <div style={{
                width: '200px',
                height: '60px',
                border: `${value} solid #2B79B9`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#7B8A99'
              }}>
                Sample
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Border Radius</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[0, 4, 8, 12, 20, 'full'].map((key) => {
              const value = key === 'full' ? foundationRadius.full : foundationRadius[key as number];
              return (
                <div key={key} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: '#2B79B9',
                      borderRadius: value,
                      margin: '0 auto 8px',
                    }}
                  />
                  <div style={{ fontSize: '11px', fontWeight: '600' }}>{key}</div>
                  <div style={{ fontSize: '10px', color: '#7B8A99' }}>{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; border, radius &#125; from '@breathe-ds/core';<br/>
        border: border.width.default solid #color;<br/>
        border-radius: radius.button.external;
      </div>
    </section>

    {/* HEIGHT */}
    <section id="height" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Height
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Buttons</h4>
          {Object.entries(height.button).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '11px', color: '#7B8A99', marginBottom: '4px' }}>
                {key} - {value}
              </div>
              <div style={{
                height: value,
                background: '#2B79B9',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '13px'
              }}>
                Button
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Inputs</h4>
          {Object.entries(height.input).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '11px', color: '#7B8A99', marginBottom: '4px' }}>
                {key} - {value}
              </div>
              <input
                type="text"
                placeholder="Input"
                style={{
                  width: '100%',
                  height: value,
                  border: '1px solid #E8EDF2',
                  borderRadius: '6px',
                  padding: '0 12px',
                  fontSize: '14px'
                }}
              />
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Touch Targets</h4>
          <div style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '11px', color: '#7B8A99', marginBottom: '4px' }}>
              Minimum (WCAG) - {height.touchTarget.minimum}
            </div>
            <div style={{
              height: height.touchTarget.minimum,
              background: '#27AE60',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '13px'
            }}>
              44px min
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#7B8A99', marginBottom: '4px' }}>
              Comfortable - {height.touchTarget.comfortable}
            </div>
            <div style={{
              height: height.touchTarget.comfortable,
              background: '#27AE60',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '13px'
            }}>
              56px preferred
            </div>
          </div>
        </div>
      </div>

      <div style={{
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; height &#125; from '@breathe-ds/core';<br/>
        min-height: height.button.large; // 56px
      </div>
    </section>

    {/* SHADOWS */}
    <section id="shadows" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Shadows
      </h2>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Elevation Levels</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {[0, 2, 4, 8, 16].map((level) => (
            <div key={level} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: '80px',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: shadows.elevation[level],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#2D4A5F',
                  marginBottom: '8px',
                }}
              >
                {level}
              </div>
              <div style={{ fontSize: '11px', color: '#7B8A99' }}>
                elevation[{level}]
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; shadows &#125; from '@breathe-ds/core';<br/>
        box-shadow: shadows.elevation[4]; // raised
      </div>
    </section>

    {/* ANIMATION */}
    <section id="animation" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Animation
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Duration</h3>
          <div style={{ display: 'grid', gap: '8px' }}>
            {Object.entries(duration).map(([key, value]) => (
              <div key={key} style={{ padding: '12px', background: '#F8FAFB', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{key}</span>
                <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#2B79B9' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Easing</h3>
          <div style={{ display: 'grid', gap: '8px' }}>
            {Object.entries(easing).slice(0, 6).map(([key, value]) => (
              <div key={key} style={{ padding: '12px', background: '#F8FAFB', borderRadius: '6px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>{key}</div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#7B8A99' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '24px',
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; animation, duration, easing &#125; from '@breathe-ds/core';<br/>
        transition: animation.hover.transition;
      </div>
    </section>

    {/* OPACITY */}
    <section id="opacity" style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Opacity
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
        {Object.entries(opacity).slice(0, 12).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '8px', height: '60px' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'repeating-conic-gradient(#E8EDF2 0% 25%, transparent 0% 50%) 50% / 16px 16px',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  background: '#2B79B9',
                  opacity: value,
                  borderRadius: '6px',
                }}
              />
            </div>
            <div style={{ fontSize: '11px', fontWeight: '600', marginBottom: '2px' }}>
              {key}
            </div>
            <div style={{ fontSize: '10px', color: '#7B8A99' }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '24px',
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; opacity &#125; from '@breathe-ds/core';<br/>
        opacity: opacity.disabled; // 0.4
      </div>
    </section>

    {/* Z-INDEX */}
    <section style={{ marginBottom: '80px' }}>
      <h2 style={{
        fontFamily: 'Lexend, sans-serif',
        marginBottom: '24px',
        fontSize: '28px',
        borderBottom: '3px solid #2B79B9',
        paddingBottom: '12px'
      }}>
        Z-Index
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {Object.entries(zIndex).map(([key, value]) => (
          <div key={key} style={{
            padding: '16px',
            background: '#F8FAFB',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                {key}
              </div>
              <div style={{ fontSize: '11px', color: '#7B8A99' }}>
                z-index: {value}
              </div>
            </div>
            <div style={{ fontSize: '20px', fontFamily: 'monospace', color: '#2B79B9', fontWeight: '700' }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '24px',
        padding: '12px',
        background: '#F8FAFB',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'monospace'
      }}>
        import &#123; zIndex &#125; from '@breathe-ds/core';<br/>
        z-index: zIndex.modal; // 1400
      </div>
    </section>

    {/* Usage Summary */}
    <section style={{
      marginTop: '80px',
      padding: '32px',
      background: 'linear-gradient(135deg, #E8F2FA 0%, #F8FAFB 100%)',
      borderRadius: '16px',
      border: '2px solid #2B79B9'
    }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>Quick Start</h2>
      <div style={{
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        fontFamily: 'monospace',
        fontSize: '13px',
        lineHeight: '1.8',
        overflowX: 'auto'
      }}>
        <div style={{ color: '#7B8A99' }}>// Import all tokens</div>
        <div style={{ color: '#E74C3C' }}>import</div> &#123;<br/>
        &nbsp;&nbsp;tokens,&nbsp;<span style={{ color: '#7B8A99' }}>// Colors</span><br/>
        &nbsp;&nbsp;typography,&nbsp;<span style={{ color: '#7B8A99' }}>// Font</span><br/>
        &nbsp;&nbsp;spacing,&nbsp;<span style={{ color: '#7B8A99' }}>// Space</span><br/>
        &nbsp;&nbsp;border,&nbsp;<span style={{ color: '#7B8A99' }}>// Border width</span><br/>
        &nbsp;&nbsp;radius,&nbsp;<span style={{ color: '#7B8A99' }}>// Border radius</span><br/>
        &nbsp;&nbsp;height,&nbsp;<span style={{ color: '#7B8A99' }}>// Height</span><br/>
        &nbsp;&nbsp;shadows,&nbsp;<span style={{ color: '#7B8A99' }}>// Shadows</span><br/>
        &nbsp;&nbsp;animation,&nbsp;<span style={{ color: '#7B8A99' }}>// Animation</span><br/>
        &nbsp;&nbsp;opacity,&nbsp;<span style={{ color: '#7B8A99' }}>// Opacity</span><br/>
        &nbsp;&nbsp;zIndex,&nbsp;<span style={{ color: '#7B8A99' }}>// Z-index</span><br/>
        &#125; <span style={{ color: '#E74C3C' }}>from</span> <span style={{ color: '#27AE60' }}>'@breathe-ds/core'</span>;
      </div>
    </section>
  </div>
);

const meta = {
  title: 'Foundation/Design Tokens',
  component: TokensShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete design token system for the Breathe Design System. Includes colors, typography, spacing, borders, height, shadows, animation, opacity, and z-index.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TokensShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTokens: Story = {};
