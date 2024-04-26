// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedArrowOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedArrowOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedArrowOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedArrowOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedArrowOutlined);

RefIcon.displayName = 'LegendDashedArrowOutlined';

export default RefIcon;
