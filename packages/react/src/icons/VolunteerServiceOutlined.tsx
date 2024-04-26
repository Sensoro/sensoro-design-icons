// This icon file is generated automatically.
import * as React from 'react';
import VolunteerServiceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VolunteerServiceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VolunteerServiceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VolunteerServiceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VolunteerServiceOutlined);

RefIcon.displayName = 'VolunteerServiceOutlined';

export default RefIcon;
