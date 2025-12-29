// This icon file is generated automatically.
import * as React from 'react';
import DispatchingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DispatchingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DispatchingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DispatchingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DispatchingOutlined);

RefIcon.displayName = 'DispatchingOutlined';

export default RefIcon;
