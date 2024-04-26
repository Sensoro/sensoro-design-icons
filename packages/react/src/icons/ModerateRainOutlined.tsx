// This icon file is generated automatically.
import * as React from 'react';
import ModerateRainOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ModerateRainOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ModerateRainOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ModerateRainOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ModerateRainOutlined);

RefIcon.displayName = 'ModerateRainOutlined';

export default RefIcon;
