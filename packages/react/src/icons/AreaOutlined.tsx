// This icon file is generated automatically.
import * as React from 'react';
import AreaOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AreaOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AreaOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AreaOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AreaOutlined);

RefIcon.displayName = 'AreaOutlined';

export default RefIcon;
