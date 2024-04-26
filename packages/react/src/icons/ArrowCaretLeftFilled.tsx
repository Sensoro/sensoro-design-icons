// This icon file is generated automatically.
import * as React from 'react';
import ArrowCaretLeftFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowCaretLeftFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCaretLeftFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCaretLeftFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCaretLeftFilled);

RefIcon.displayName = 'ArrowCaretLeftFilled';

export default RefIcon;
