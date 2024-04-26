// This icon file is generated automatically.
import * as React from 'react';
import DockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DockOutlined);

RefIcon.displayName = 'DockOutlined';

export default RefIcon;
