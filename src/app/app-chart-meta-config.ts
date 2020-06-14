import * as ng2Charts from 'ng2-charts';

// Edit this file, for any extensions to chart.js.

// START - Financial chart meta config
export interface FinancialDataPoint {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface FinancialDataSet extends ng2Charts.ChartDataSetsBase {
  type?: 'candlestick' | 'ohlc';
  label: string;
  data: FinancialDataPoint[];
}

export interface FinancialLinearScale extends ng2Charts.LinearScale<ng2Charts.ChartMetaConfig> {
  type?: 'financialLinear';
}
// END - Financial chart meta config

export interface AppChartMetaConfig extends ng2Charts.BaseChartMetaConfig {
  datasetTypes: ng2Charts.ChartMetaConfig['datasetTypes'] | FinancialDataSet;
  scaleTypes: ng2Charts.ChartMetaConfig['scaleTypes'];
  pluginOptions: {};
  additionalOptions: {};
}
