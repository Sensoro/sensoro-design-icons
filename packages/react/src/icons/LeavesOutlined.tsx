// This icon file is generated automatically.
import * as React from 'react';
import LeavesOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeavesOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeavesOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeavesOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeavesOutlined);

RefIcon.displayName = 'LeavesOutlined';

export default RefIcon;
