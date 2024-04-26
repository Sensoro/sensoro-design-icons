// This icon file is generated automatically.
import * as React from 'react';
import ModerateRainFilledSvg from '@sensoro-design/icons-svg/es/asn/ModerateRainFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ModerateRainFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ModerateRainFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ModerateRainFilled);

RefIcon.displayName = 'ModerateRainFilled';

export default RefIcon;
