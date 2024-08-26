// This icon file is generated automatically.
import * as React from 'react';
import DescentOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DescentOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DescentOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DescentOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DescentOutlined);

RefIcon.displayName = 'DescentOutlined';

export default RefIcon;
