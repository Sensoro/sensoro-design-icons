// This icon file is generated automatically.
import * as React from 'react';
import ShelterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShelterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShelterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShelterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShelterOutlined);

RefIcon.displayName = 'ShelterOutlined';

export default RefIcon;
