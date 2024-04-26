// This icon file is generated automatically.
import * as React from 'react';
import LinsAccessOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LinsAccessOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LinsAccessOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LinsAccessOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LinsAccessOutlined);

RefIcon.displayName = 'LinsAccessOutlined';

export default RefIcon;
