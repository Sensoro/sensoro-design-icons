// This icon file is generated automatically.
import * as React from 'react';
import LineChartOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LineChartOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LineChartOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LineChartOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LineChartOutlined);

RefIcon.displayName = 'LineChartOutlined';

export default RefIcon;
