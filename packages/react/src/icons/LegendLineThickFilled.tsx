// This icon file is generated automatically.
import * as React from 'react';
import LegendLineThickFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendLineThickFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendLineThickFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendLineThickFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendLineThickFilled);

RefIcon.displayName = 'LegendLineThickFilled';

export default RefIcon;
