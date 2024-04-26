// This icon file is generated automatically.
import * as React from 'react';
import TempleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TempleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TempleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TempleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TempleOutlined);

RefIcon.displayName = 'TempleOutlined';

export default RefIcon;
