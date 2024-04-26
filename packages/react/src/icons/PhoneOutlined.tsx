// This icon file is generated automatically.
import * as React from 'react';
import PhoneOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PhoneOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PhoneOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PhoneOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PhoneOutlined);

RefIcon.displayName = 'PhoneOutlined';

export default RefIcon;
