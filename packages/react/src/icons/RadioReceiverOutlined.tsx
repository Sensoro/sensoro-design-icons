// This icon file is generated automatically.
import * as React from 'react';
import RadioReceiverOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RadioReceiverOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RadioReceiverOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RadioReceiverOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RadioReceiverOutlined);

RefIcon.displayName = 'RadioReceiverOutlined';

export default RefIcon;
