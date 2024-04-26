// This icon file is generated automatically.
import * as React from 'react';
import ArrowCircleEndFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowCircleEndFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCircleEndFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCircleEndFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCircleEndFilled);

RefIcon.displayName = 'ArrowCircleEndFilled';

export default RefIcon;
