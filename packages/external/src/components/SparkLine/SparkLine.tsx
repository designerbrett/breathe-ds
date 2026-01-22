import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import styles from './SparkLine.module.css';

export interface SparkLineDataPoint {
  value: number;
}

export interface SparkLineProps {
  /** Data points for the sparkline */
  data: SparkLineDataPoint[];
  /** Line color (default: #2B79B9) */
  color?: string;
  /** Width in pixels (default: 80) */
  width?: number;
  /** Height in pixels (default: 40) */
  height?: number;
  /** Trend direction for automatic coloring */
  trend?: 'up' | 'down' | 'neutral';
}

/**
 * Spark Line component - compact inline trend indicator
 * Perfect for stat cards and dashboards
 */
export const SparkLine: React.FC<SparkLineProps> = ({
  data,
  color,
  width = 80,
  height = 40,
  trend,
}) => {
  // Auto-color based on trend if not explicitly set
  const lineColor = color || (
    trend === 'up' ? '#27AE60' :
    trend === 'down' ? '#E74C3C' :
    '#2B79B9'
  );

  return (
    <div className={styles.sparkLine} style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SparkLine.displayName = 'SparkLine';
