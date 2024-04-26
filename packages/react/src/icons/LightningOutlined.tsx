// This icon file is generated automatically.
import * as React from 'react';
import LightningOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LightningOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LightningOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LightningOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LightningOutlined);

RefIcon.displayName = 'LightningOutlined';

export default RefIcon;
