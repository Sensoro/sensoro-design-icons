// This icon file is generated automatically.
import * as React from 'react';
import FastForwardFilledSvg from '@sensoro-design/icons-svg/es/asn/FastForwardFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FastForwardFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FastForwardFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FastForwardFilled);

RefIcon.displayName = 'FastForwardFilled';

export default RefIcon;
