import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import styles from './DonutChart.module.css';

export interface DonutChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface DonutChartProps {
  /** Data to display in the chart */
  data: DonutChartDataPoint[];
  /** Chart title */
  title?: string;
  /** Default colors if not specified per data point */
  colors?: string[];
  /** Height of the chart in pixels */
  height?: number;
  /** Show legend */
  showLegend?: boolean;
  /** Show tooltip on hover */
  showTooltip?: boolean;
  /** Show center label with total */
  centerLabel?: string | number;
  /** Inner radius size (default: 60) */
  innerRadius?: number;
  /** Outer radius size (default: 80) */
  outerRadius?: number;
}

const DEFAULT_COLORS = ['#2B79B9', '#27AE60', '#E67E22', '#E74C3C', '#9B59B6', '#3498DB'];

/**
 * Donut Chart component for showing proportions with a center total
 * Based on Breathe Design System patterns
 */
export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  title,
  colors = DEFAULT_COLORS,
  height = 300,
  showLegend = true,
  showTooltip = true,
  centerLabel,
  innerRadius = 60,
  outerRadius = 80,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const displayLabel = centerLabel !== undefined ? centerLabel : total;

  return (
    <div className={styles.donutChart}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || colors[index % colors.length]}
                />
              ))}
            </Pie>
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E8EDF2',
                  borderRadius: '6px',
                  fontSize: '12px',
                }}
              />
            )}
            {showLegend && (
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                iconType="square"
                formatter={(value, entry: any) => {
                  const percent = ((entry.payload.value / total) * 100).toFixed(0);
                  return `${value} (${percent}%)`;
                }}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
        {centerLabel !== null && (
          <div className={styles.centerLabel}>
            <div className={styles.centerValue}>{displayLabel}</div>
            <div className={styles.centerText}>Total</div>
          </div>
        )}
      </div>
    </div>
  );
};

DonutChart.displayName = 'DonutChart';
