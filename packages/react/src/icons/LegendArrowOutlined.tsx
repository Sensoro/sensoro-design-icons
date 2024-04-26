// This icon file is generated automatically.
import * as React from 'react';
import LegendArrowOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendArrowOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendArrowOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendArrowOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendArrowOutlined);

RefIcon.displayName = 'LegendArrowOutlined';

export default RefIcon;
