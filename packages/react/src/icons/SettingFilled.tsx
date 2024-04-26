// This icon file is generated automatically.
import * as React from 'react';
import SettingFilledSvg from '@sensoro-design/icons-svg/es/asn/SettingFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SettingFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SettingFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SettingFilled);

RefIcon.displayName = 'SettingFilled';

export default RefIcon;
