// This icon file is generated automatically.
import * as React from 'react';
import ArrowCaretUpRightFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowCaretUpRightFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCaretUpRightFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCaretUpRightFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCaretUpRightFilled);

RefIcon.displayName = 'ArrowCaretUpRightFilled';

export default RefIcon;
