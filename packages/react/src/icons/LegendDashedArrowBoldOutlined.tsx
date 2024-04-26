// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedArrowBoldOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedArrowBoldOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedArrowBoldOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedArrowBoldOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedArrowBoldOutlined);

RefIcon.displayName = 'LegendDashedArrowBoldOutlined';

export default RefIcon;
