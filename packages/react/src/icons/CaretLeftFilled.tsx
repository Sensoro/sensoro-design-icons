// This icon file is generated automatically.
import * as React from 'react';
import CaretLeftFilledSvg from '@sensoro-design/icons-svg/es/asn/CaretLeftFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CaretLeftFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CaretLeftFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CaretLeftFilled);

RefIcon.displayName = 'CaretLeftFilled';

export default RefIcon;
