// This icon file is generated automatically.
import * as React from 'react';
import CaretUpFilledSvg from '@sensoro-design/icons-svg/es/asn/CaretUpFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CaretUpFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CaretUpFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CaretUpFilled);

RefIcon.displayName = 'CaretUpFilled';

export default RefIcon;
