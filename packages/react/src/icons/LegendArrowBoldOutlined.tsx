// This icon file is generated automatically.
import * as React from 'react';
import LegendArrowBoldOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendArrowBoldOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendArrowBoldOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendArrowBoldOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendArrowBoldOutlined);

RefIcon.displayName = 'LegendArrowBoldOutlined';

export default RefIcon;
