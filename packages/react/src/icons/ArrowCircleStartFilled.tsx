// This icon file is generated automatically.
import * as React from 'react';
import ArrowCircleStartFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowCircleStartFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCircleStartFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCircleStartFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCircleStartFilled);

RefIcon.displayName = 'ArrowCircleStartFilled';

export default RefIcon;
