// This icon file is generated automatically.
import * as React from 'react';
import NoSwimmingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NoSwimmingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoSwimmingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoSwimmingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoSwimmingOutlined);

RefIcon.displayName = 'NoSwimmingOutlined';

export default RefIcon;
