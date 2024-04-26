// This icon file is generated automatically.
import * as React from 'react';
import FireworksFilledSvg from '@sensoro-design/icons-svg/es/asn/FireworksFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireworksFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireworksFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireworksFilled);

RefIcon.displayName = 'FireworksFilled';

export default RefIcon;
