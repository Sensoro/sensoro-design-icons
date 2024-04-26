// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedLineBoldFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedLineBoldFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedLineBoldFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedLineBoldFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedLineBoldFilled);

RefIcon.displayName = 'LegendDashedLineBoldFilled';

export default RefIcon;
