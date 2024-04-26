// This icon file is generated automatically.
import * as React from 'react';
import ArrowSquareStartFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowSquareStartFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowSquareStartFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowSquareStartFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowSquareStartFilled);

RefIcon.displayName = 'ArrowSquareStartFilled';

export default RefIcon;
