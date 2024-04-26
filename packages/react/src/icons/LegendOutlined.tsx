// This icon file is generated automatically.
import * as React from 'react';
import LegendOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendOutlined);

RefIcon.displayName = 'LegendOutlined';

export default RefIcon;
