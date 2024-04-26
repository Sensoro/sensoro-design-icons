// This icon file is generated automatically.
import * as React from 'react';
import DamOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DamOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DamOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DamOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DamOutlined);

RefIcon.displayName = 'DamOutlined';

export default RefIcon;
