// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedLineThickFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedLineThickFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedLineThickFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedLineThickFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedLineThickFilled);

RefIcon.displayName = 'LegendDashedLineThickFilled';

export default RefIcon;
