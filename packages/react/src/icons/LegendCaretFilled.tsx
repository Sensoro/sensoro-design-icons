// This icon file is generated automatically.
import * as React from 'react';
import LegendCaretFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendCaretFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendCaretFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendCaretFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendCaretFilled);

RefIcon.displayName = 'LegendCaretFilled';

export default RefIcon;
