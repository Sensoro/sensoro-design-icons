// This icon file is generated automatically.
import * as React from 'react';
import AndroidFilledSvg from '@sensoro-design/icons-svg/es/asn/AndroidFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AndroidFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AndroidFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AndroidFilled);

RefIcon.displayName = 'AndroidFilled';

export default RefIcon;
