// This icon file is generated automatically.
import * as React from 'react';
import ThermometerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ThermometerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ThermometerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ThermometerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ThermometerOutlined);

RefIcon.displayName = 'ThermometerOutlined';

export default RefIcon;
