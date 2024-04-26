// This icon file is generated automatically.
import * as React from 'react';
import SmokeFilledSvg from '@sensoro-design/icons-svg/es/asn/SmokeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmokeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmokeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmokeFilled);

RefIcon.displayName = 'SmokeFilled';

export default RefIcon;
