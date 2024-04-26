// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedCaretThickFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedCaretThickFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedCaretThickFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedCaretThickFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedCaretThickFilled);

RefIcon.displayName = 'LegendDashedCaretThickFilled';

export default RefIcon;
