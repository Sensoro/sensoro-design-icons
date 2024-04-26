// This icon file is generated automatically.
import * as React from 'react';
import VolunteerServiceFilledSvg from '@sensoro-design/icons-svg/es/asn/VolunteerServiceFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VolunteerServiceFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VolunteerServiceFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VolunteerServiceFilled);

RefIcon.displayName = 'VolunteerServiceFilled';

export default RefIcon;
