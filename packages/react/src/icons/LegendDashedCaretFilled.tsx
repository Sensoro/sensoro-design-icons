// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedCaretFilledSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedCaretFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedCaretFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedCaretFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedCaretFilled);

RefIcon.displayName = 'LegendDashedCaretFilled';

export default RefIcon;
