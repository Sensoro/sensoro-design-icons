// This icon file is generated automatically.
import * as React from 'react';
import SportsFacilitiesOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SportsFacilitiesOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SportsFacilitiesOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SportsFacilitiesOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SportsFacilitiesOutlined);

RefIcon.displayName = 'SportsFacilitiesOutlined';

export default RefIcon;
