// This icon file is generated automatically.
import * as React from 'react';
import NoodlesOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NoodlesOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoodlesOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoodlesOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoodlesOutlined);

RefIcon.displayName = 'NoodlesOutlined';

export default RefIcon;
