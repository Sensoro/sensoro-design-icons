// This icon file is generated automatically.
import * as React from 'react';
import ArrowCaretRightFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowCaretRightFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCaretRightFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCaretRightFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCaretRightFilled);

RefIcon.displayName = 'ArrowCaretRightFilled';

export default RefIcon;
