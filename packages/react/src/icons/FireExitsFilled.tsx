// This icon file is generated automatically.
import * as React from 'react';
import FireExitsFilledSvg from '@sensoro-design/icons-svg/es/asn/FireExitsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireExitsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireExitsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireExitsFilled);

RefIcon.displayName = 'FireExitsFilled';

export default RefIcon;
