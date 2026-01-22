import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './BarGraph.module.css';
import { GRADIENTS } from '../../utils/chartColors';

export interface BarGraphDataPoint {
  name: string;
  value: number;
}

export interface BarGraphProps {
  /** Data to display in the chart */
  data: BarGraphDataPoint[];
  /** Chart title */
  title?: string;
  /** Primary color for bars (default: #2B79B9) */
  barColor?: string;
  /** Array of colors for multi-colored bars */
  barColors?: string[];
  /** Use gradient fill for bars */
  useGradient?: boolean;
  /** Gradient color scheme (blue, green, orange, red, purple, teal) */
  gradientColor?: keyof typeof GRADIENTS;
  /** Height of the chart in pixels */
  height?: number;
  /** Layout orientation */
  layout?: 'horizontal' | 'vertical';
  /** Show grid lines */
  showGrid?: boolean;
  /** Show tooltip on hover */
  showTooltip?: boolean;
}

/**
 * Bar Graph component for comparing values across categories
 * Based on Breathe Design System patterns
 */
export const BarGraph: React.FC<BarGraphProps> = ({
  data,
  title,
  barColor = '#2B79B9',
  barColors,
  useGradient = false,
  gradientColor = 'blue',
  height = 300,
  layout = 'vertical',
  showGrid = false,
  showTooltip = true,
}) => {
  const gradientId = `gradient-${gradientColor}`;
  const [startColor, endColor] = GRADIENTS[gradientColor];

  return (
    <div className={styles.barGraph}>
      {title && <div className={styles.title}>{title}</div>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout={layout}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2={layout === 'vertical' ? '1' : '0'} y2={layout === 'vertical' ? '0' : '1'}>
              <stop offset="0%" stopColor={startColor} />
              <stop offset="100%" stopColor={endColor} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E8EDF2"
            />
          )}
          {layout === 'vertical' ? (
            <>
              <XAxis type="number" stroke="#7B8A99" style={{ fontSize: '11px' }} />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#7B8A99"
                style={{ fontSize: '13px', fontWeight: '600' }}
                width={120}
              />
            </>
          ) : (
            <>
              <XAxis
                dataKey="name"
                stroke="#7B8A99"
                style={{ fontSize: '13px', fontWeight: '600' }}
              />
              <YAxis type="number" stroke="#7B8A99" style={{ fontSize: '11px' }} />
            </>
          )}
          {showTooltip && (
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E8EDF2',
                borderRadius: '6px',
                fontSize: '12px',
              }}
              cursor={{ fill: 'rgba(43, 121, 185, 0.1)' }}
            />
          )}
          <Bar dataKey="value" radius={4}>
            {barColors ? (
              barColors.map((color, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))
            ) : useGradient ? (
              data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={`url(#${gradientId})`} />
              ))
            ) : (
              data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={barColor} />
              ))
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

BarGraph.displayName = 'BarGraph';
