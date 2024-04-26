// This icon file is generated automatically.
import * as React from 'react';
import VrOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VrOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VrOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VrOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VrOutlined);

RefIcon.displayName = 'VrOutlined';

export default RefIcon;
