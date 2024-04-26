// This icon file is generated automatically.
import * as React from 'react';
import SmartLightPoleFilledSvg from '@sensoro-design/icons-svg/es/asn/SmartLightPoleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartLightPoleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartLightPoleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartLightPoleFilled);

RefIcon.displayName = 'SmartLightPoleFilled';

export default RefIcon;
