// This icon file is generated automatically.
import * as React from 'react';
import FastBackwardFilledSvg from '@sensoro-design/icons-svg/es/asn/FastBackwardFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FastBackwardFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FastBackwardFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FastBackwardFilled);

RefIcon.displayName = 'FastBackwardFilled';

export default RefIcon;
