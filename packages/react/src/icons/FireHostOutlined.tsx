// This icon file is generated automatically.
import * as React from 'react';
import FireHostOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireHostOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHostOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHostOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHostOutlined);

RefIcon.displayName = 'FireHostOutlined';

export default RefIcon;
