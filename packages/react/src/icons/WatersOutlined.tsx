// This icon file is generated automatically.
import * as React from 'react';
import WatersOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WatersOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WatersOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WatersOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WatersOutlined);

RefIcon.displayName = 'WatersOutlined';

export default RefIcon;
