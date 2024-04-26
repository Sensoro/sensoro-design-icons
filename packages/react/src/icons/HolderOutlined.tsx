// This icon file is generated automatically.
import * as React from 'react';
import HolderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HolderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HolderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HolderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HolderOutlined);

RefIcon.displayName = 'HolderOutlined';

export default RefIcon;
