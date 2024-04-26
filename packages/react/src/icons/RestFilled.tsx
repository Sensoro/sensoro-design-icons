// This icon file is generated automatically.
import * as React from 'react';
import RestFilledSvg from '@sensoro-design/icons-svg/es/asn/RestFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RestFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RestFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RestFilled);

RefIcon.displayName = 'RestFilled';

export default RefIcon;
