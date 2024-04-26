// This icon file is generated automatically.
import * as React from 'react';
import InfraredOutlinedSvg from '@sensoro-design/icons-svg/es/asn/InfraredOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const InfraredOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={InfraredOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(InfraredOutlined);

RefIcon.displayName = 'InfraredOutlined';

export default RefIcon;
