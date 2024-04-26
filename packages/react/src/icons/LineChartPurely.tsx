// This icon file is generated automatically.
import * as React from 'react';
import LineChartPurelySvg from '@sensoro-design/icons-svg/es/asn/LineChartPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LineChartPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LineChartPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LineChartPurely);

RefIcon.displayName = 'LineChartPurely';

export default RefIcon;
