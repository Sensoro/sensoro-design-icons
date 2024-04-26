// This icon file is generated automatically.
import * as React from 'react';
import FloorOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FloorOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FloorOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FloorOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FloorOutlined);

RefIcon.displayName = 'FloorOutlined';

export default RefIcon;
