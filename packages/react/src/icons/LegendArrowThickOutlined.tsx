// This icon file is generated automatically.
import * as React from 'react';
import LegendArrowThickOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendArrowThickOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendArrowThickOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendArrowThickOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendArrowThickOutlined);

RefIcon.displayName = 'LegendArrowThickOutlined';

export default RefIcon;
