// This icon file is generated automatically.
import * as React from 'react';
import CallVideoFilledSvg from '@sensoro-design/icons-svg/es/asn/CallVideoFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CallVideoFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CallVideoFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CallVideoFilled);

RefIcon.displayName = 'CallVideoFilled';

export default RefIcon;
