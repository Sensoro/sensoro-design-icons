// This icon file is generated automatically.
import * as React from 'react';
import GovernmentOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GovernmentOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GovernmentOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GovernmentOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GovernmentOutlined);

RefIcon.displayName = 'GovernmentOutlined';

export default RefIcon;
