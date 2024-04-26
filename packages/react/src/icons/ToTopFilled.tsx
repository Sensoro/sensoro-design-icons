// This icon file is generated automatically.
import * as React from 'react';
import ToTopFilledSvg from '@sensoro-design/icons-svg/es/asn/ToTopFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ToTopFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ToTopFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ToTopFilled);

RefIcon.displayName = 'ToTopFilled';

export default RefIcon;
