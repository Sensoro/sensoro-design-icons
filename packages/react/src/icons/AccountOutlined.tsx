// This icon file is generated automatically.
import * as React from 'react';
import AccountOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AccountOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AccountOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AccountOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AccountOutlined);

RefIcon.displayName = 'AccountOutlined';

export default RefIcon;
