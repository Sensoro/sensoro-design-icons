// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedCaretBoldFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedCaretBoldFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedCaretBoldFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedCaretBoldFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedCaretBoldFilled);

RefIcon.displayName = 'LegendDashedCaretBoldFilled';

export default RefIcon;
