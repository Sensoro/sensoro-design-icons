// This icon file is generated automatically.
import * as React from 'react';
import RadioReceiverFilledSvg from '@sensoro-design/icons-svg/es/asn/RadioReceiverFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RadioReceiverFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RadioReceiverFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RadioReceiverFilled);

RefIcon.displayName = 'RadioReceiverFilled';

export default RefIcon;
