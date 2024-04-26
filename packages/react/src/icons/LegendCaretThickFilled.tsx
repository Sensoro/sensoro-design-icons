// This icon file is generated automatically.
import * as React from 'react';
import LegendCaretThickFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendCaretThickFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendCaretThickFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendCaretThickFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendCaretThickFilled);

RefIcon.displayName = 'LegendCaretThickFilled';

export default RefIcon;
