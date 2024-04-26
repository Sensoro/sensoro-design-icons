// This icon file is generated automatically.
import * as React from 'react';
import AimOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AimOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AimOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AimOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AimOutlined);

RefIcon.displayName = 'AimOutlined';

export default RefIcon;
