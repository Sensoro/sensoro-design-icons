// This icon file is generated automatically.
import * as React from 'react';
import FrostOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FrostOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FrostOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FrostOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FrostOutlined);

RefIcon.displayName = 'FrostOutlined';

export default RefIcon;
