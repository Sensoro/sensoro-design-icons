// This icon file is generated automatically.
import * as React from 'react';
import MedalsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MedalsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MedalsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MedalsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MedalsOutlined);

RefIcon.displayName = 'MedalsOutlined';

export default RefIcon;
