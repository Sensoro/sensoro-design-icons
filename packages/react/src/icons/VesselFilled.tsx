// This icon file is generated automatically.
import * as React from 'react';
import VesselFilledSvg from '@sensoro-design/icons-svg/es/asn/VesselFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VesselFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VesselFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VesselFilled);

RefIcon.displayName = 'VesselFilled';

export default RefIcon;
