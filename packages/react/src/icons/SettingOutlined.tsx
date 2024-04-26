// This icon file is generated automatically.
import * as React from 'react';
import SettingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SettingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SettingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SettingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SettingOutlined);

RefIcon.displayName = 'SettingOutlined';

export default RefIcon;
