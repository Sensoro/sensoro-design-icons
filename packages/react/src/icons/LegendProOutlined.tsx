// This icon file is generated automatically.
import * as React from 'react';
import LegendProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendProOutlined);

RefIcon.displayName = 'LegendProOutlined';

export default RefIcon;
