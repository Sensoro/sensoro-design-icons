// This icon file is generated automatically.
import * as React from 'react';
import ShutdownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShutdownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShutdownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShutdownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShutdownOutlined);

RefIcon.displayName = 'ShutdownOutlined';

export default RefIcon;
