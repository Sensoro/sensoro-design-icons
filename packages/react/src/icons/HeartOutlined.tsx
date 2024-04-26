// This icon file is generated automatically.
import * as React from 'react';
import HeartOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HeartOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeartOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeartOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeartOutlined);

RefIcon.displayName = 'HeartOutlined';

export default RefIcon;
