// This icon file is generated automatically.
import * as React from 'react';
import PanoramaTourFilledSvg from '@sensoro-design/icons-svg/es/asn/PanoramaTourFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PanoramaTourFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PanoramaTourFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PanoramaTourFilled);

RefIcon.displayName = 'PanoramaTourFilled';

export default RefIcon;
