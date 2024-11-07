// This icon file is generated automatically.
import * as React from 'react';
import AndroidOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AndroidOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AndroidOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AndroidOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AndroidOutlined);

RefIcon.displayName = 'AndroidOutlined';

export default RefIcon;
