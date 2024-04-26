// This icon file is generated automatically.
import * as React from 'react';
import BorderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BorderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BorderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BorderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BorderOutlined);

RefIcon.displayName = 'BorderOutlined';

export default RefIcon;
