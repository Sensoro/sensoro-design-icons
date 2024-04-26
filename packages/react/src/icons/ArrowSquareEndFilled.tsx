// This icon file is generated automatically.
import * as React from 'react';
import ArrowSquareEndFilledSvg from '@sensoro-design/icons-svg/es/asn/ArrowSquareEndFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowSquareEndFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowSquareEndFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowSquareEndFilled);

RefIcon.displayName = 'ArrowSquareEndFilled';

export default RefIcon;
