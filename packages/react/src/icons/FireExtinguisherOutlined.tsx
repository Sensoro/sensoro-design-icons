// This icon file is generated automatically.
import * as React from 'react';
import FireExtinguisherOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireExtinguisherOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireExtinguisherOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireExtinguisherOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireExtinguisherOutlined);

RefIcon.displayName = 'FireExtinguisherOutlined';

export default RefIcon;
