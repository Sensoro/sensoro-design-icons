// This icon file is generated automatically.
import * as React from 'react';
import AmapFilledSvg from '@sensoro-design/icons-svg/es/asn/AmapFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AmapFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AmapFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AmapFilled);

RefIcon.displayName = 'AmapFilled';

export default RefIcon;
