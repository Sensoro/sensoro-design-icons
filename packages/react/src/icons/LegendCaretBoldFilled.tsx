// This icon file is generated automatically.
import * as React from 'react';
import LegendCaretBoldFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendCaretBoldFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendCaretBoldFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendCaretBoldFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendCaretBoldFilled);

RefIcon.displayName = 'LegendCaretBoldFilled';

export default RefIcon;
