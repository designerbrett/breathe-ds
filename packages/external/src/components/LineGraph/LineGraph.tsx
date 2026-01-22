import React from 'react';
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './LineGraph.module.css';

export interface LineGraphDataPoint {
  name: string;
  value: number;
}

export interface LineGraphProps {
  /** Data to display in the chart */
  data: LineGraphDataPoint[];
  /** Chart title */
  title?: string;
  /** Primary color for the line (default: #2B79B9) */
  lineColor?: string;
  /** Height of the chart in pixels */
  height?: number;
  /** Show grid lines */
  showGrid?: boolean;
  /** Show tooltip on hover */
  showTooltip?: boolean;
  /** Show gradient area fill under the line */
  showAreaFill?: boolean;
  /** Y-axis label */
  yAxisLabel?: string;
  /** X-axis label */
  xAxisLabel?: string;
}

/**
 * Line Graph component for visualizing trends over time
 * Based on Breathe Design System patterns
 */
export const LineGraph: React.FC<LineGraphProps> = ({
  data,
  title,
  lineColor = '#2B79B9',
  height = 300,
  showGrid = true,
  showTooltip = true,
  showAreaFill = false,
  yAxisLabel,
  xAxisLabel,
}) => {
  const gradientId = `lineGradient-${lineColor.replace('#', '')}`;

  return (
    <div className={styles.lineGraph}>
      {title && <div className={styles.title}>{title}</div>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={lineColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E8EDF2"
              vertical={false}
            />
          )}
          <XAxis
            dataKey="name"
            stroke="#7B8A99"
            style={{ fontSize: '11px' }}
            tick={{ fill: '#7B8A99' }}
            label={xAxisLabel ? { value: xAxisLabel, position: 'insideBottom', offset: -5 } : undefined}
          />
          <YAxis
            stroke="#7B8A99"
            style={{ fontSize: '11px' }}
            tick={{ fill: '#7B8A99' }}
            label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined}
          />
          {showTooltip && (
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E8EDF2',
                borderRadius: '6px',
                fontSize: '12px',
              }}
              cursor={{ stroke: lineColor, strokeWidth: 1, strokeDasharray: '3 3' }}
            />
          )}
          {showAreaFill && (
            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill={`url(#${gradientId})`}
            />
          )}
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            dot={{ fill: lineColor, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineGraph.displayName = 'LineGraph';
