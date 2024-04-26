// This icon file is generated automatically.
import * as React from 'react';
import VesselOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VesselOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VesselOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VesselOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VesselOutlined);

RefIcon.displayName = 'VesselOutlined';

export default RefIcon;
