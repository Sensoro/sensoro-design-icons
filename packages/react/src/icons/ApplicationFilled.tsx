// This icon file is generated automatically.
import * as React from 'react';
import ApplicationFilledSvg from '@sensoro-design/icons-svg/es/asn/ApplicationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ApplicationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ApplicationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ApplicationFilled);

RefIcon.displayName = 'ApplicationFilled';

export default RefIcon;
