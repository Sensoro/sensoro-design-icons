// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedArrowThickOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedArrowThickOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedArrowThickOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedArrowThickOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedArrowThickOutlined);

RefIcon.displayName = 'LegendDashedArrowThickOutlined';

export default RefIcon;
