// This icon file is generated automatically.
import * as React from 'react';
import SmokeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmokeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmokeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmokeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmokeOutlined);

RefIcon.displayName = 'SmokeOutlined';

export default RefIcon;
