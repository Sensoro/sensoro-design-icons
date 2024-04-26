// This icon file is generated automatically.
import * as React from 'react';
import UserSettingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserSettingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserSettingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserSettingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserSettingOutlined);

RefIcon.displayName = 'UserSettingOutlined';

export default RefIcon;
