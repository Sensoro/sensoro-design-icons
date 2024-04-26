// This icon file is generated automatically.
import * as React from 'react';
import CaretRightFilledSvg from '@sensoro-design/icons-svg/es/asn/CaretRightFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CaretRightFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CaretRightFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CaretRightFilled);

RefIcon.displayName = 'CaretRightFilled';

export default RefIcon;
