import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import styles from './PieChart.module.css';

export interface PieChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartProps {
  /** Data to display in the chart */
  data: PieChartDataPoint[];
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
  /** Show percentage labels on slices */
  showLabels?: boolean;
}

const DEFAULT_COLORS = ['#2B79B9', '#27AE60', '#E67E22', '#E74C3C', '#9B59B6', '#3498DB'];

/**
 * Pie Chart component for showing proportions and percentages
 * Based on Breathe Design System patterns
 */
export const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  colors = DEFAULT_COLORS,
  height = 300,
  showLegend = true,
  showTooltip = true,
  showLabels = false,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderLabel = (entry: any) => {
    const percent = ((entry.value / total) * 100).toFixed(0);
    return `${percent}%`;
  };

  return (
    <div className={styles.pieChart}>
      {title && <div className={styles.title}>{title}</div>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={showLabels}
            label={showLabels ? renderLabel : false}
            outerRadius={80}
            fill="#8884d8"
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
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

PieChart.displayName = 'PieChart';
