// This icon file is generated automatically.
import * as React from 'react';
import GovernmentFilledSvg from '@sensoro-design/icons-svg/es/asn/GovernmentFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GovernmentFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GovernmentFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GovernmentFilled);

RefIcon.displayName = 'GovernmentFilled';

export default RefIcon;
