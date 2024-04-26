// This icon file is generated automatically.
import * as React from 'react';
import RiverOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RiverOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RiverOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RiverOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RiverOutlined);

RefIcon.displayName = 'RiverOutlined';

export default RefIcon;
