// This icon file is generated automatically.
import * as React from 'react';
import UserSafetyCertificateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserSafetyCertificateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserSafetyCertificateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserSafetyCertificateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserSafetyCertificateOutlined);

RefIcon.displayName = 'UserSafetyCertificateOutlined';

export default RefIcon;
