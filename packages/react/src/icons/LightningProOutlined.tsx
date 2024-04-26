// This icon file is generated automatically.
import * as React from 'react';
import LightningProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LightningProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LightningProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LightningProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LightningProOutlined);

RefIcon.displayName = 'LightningProOutlined';

export default RefIcon;
