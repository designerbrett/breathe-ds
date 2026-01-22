import React from 'react';
import styles from './StatCard.module.css';

export interface StatCardProps {
  /** Main label/title */
  label: string;
  /** Primary value to display */
  value: string | number;
  /** Trend indicator text (e.g., "↑ 12% from last month") */
  trend?: string;
  /** Trend direction for styling */
  trendDirection?: 'up' | 'down' | 'neutral';
  /** Accent color for the card (optional border or highlight) */
  accentColor?: string;
  /** Additional description or subtitle */
  description?: string;
}

/**
 * Stat Card component for displaying key metrics prominently
 * Based on Breathe Design System patterns
 */
export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  trend,
  trendDirection = 'neutral',
  accentColor,
  description,
}) => {
  const getTrendColor = () => {
    if (trendDirection === 'up') return '#27AE60';
    if (trendDirection === 'down') return '#E74C3C';
    return '#7B8A99';
  };

  return (
    <div
      className={styles.statCard}
      style={accentColor ? { borderLeft: `4px solid ${accentColor}` } : undefined}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
      {trend && (
        <div
          className={styles.trend}
          style={{ color: getTrendColor() }}
        >
          {trend}
        </div>
      )}
      {description && (
        <div className={styles.description}>{description}</div>
      )}
    </div>
  );
};

StatCard.displayName = 'StatCard';
