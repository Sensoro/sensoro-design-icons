// This icon file is generated automatically.
import * as React from 'react';
import SmileFilledSvg from '@sensoro-design/icons-svg/es/asn/SmileFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmileFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmileFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmileFilled);

RefIcon.displayName = 'SmileFilled';

export default RefIcon;
