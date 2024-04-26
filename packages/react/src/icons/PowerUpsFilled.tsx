// This icon file is generated automatically.
import * as React from 'react';
import PowerUpsFilledSvg from '@sensoro-design/icons-svg/es/asn/PowerUpsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerUpsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerUpsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerUpsFilled);

RefIcon.displayName = 'PowerUpsFilled';

export default RefIcon;
