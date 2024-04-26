// This icon file is generated automatically.
import * as React from 'react';
import SunOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SunOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SunOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SunOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SunOutlined);

RefIcon.displayName = 'SunOutlined';

export default RefIcon;
