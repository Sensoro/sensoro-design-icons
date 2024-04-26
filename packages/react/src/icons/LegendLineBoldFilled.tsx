// This icon file is generated automatically.
import * as React from 'react';
import LegendLineBoldFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendLineBoldFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendLineBoldFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendLineBoldFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendLineBoldFilled);

RefIcon.displayName = 'LegendLineBoldFilled';

export default RefIcon;
