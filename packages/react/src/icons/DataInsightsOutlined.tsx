// This icon file is generated automatically.
import * as React from 'react';
import DataInsightsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DataInsightsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DataInsightsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DataInsightsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DataInsightsOutlined);

RefIcon.displayName = 'DataInsightsOutlined';

export default RefIcon;
