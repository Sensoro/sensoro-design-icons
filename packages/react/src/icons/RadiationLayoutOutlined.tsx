// This icon file is generated automatically.
import * as React from 'react';
import RadiationLayoutOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RadiationLayoutOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RadiationLayoutOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RadiationLayoutOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RadiationLayoutOutlined);

RefIcon.displayName = 'RadiationLayoutOutlined';

export default RefIcon;
