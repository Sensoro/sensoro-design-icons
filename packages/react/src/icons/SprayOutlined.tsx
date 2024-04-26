// This icon file is generated automatically.
import * as React from 'react';
import SprayOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SprayOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SprayOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SprayOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SprayOutlined);

RefIcon.displayName = 'SprayOutlined';

export default RefIcon;
