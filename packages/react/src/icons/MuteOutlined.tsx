// This icon file is generated automatically.
import * as React from 'react';
import MuteOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MuteOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MuteOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MuteOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MuteOutlined);

RefIcon.displayName = 'MuteOutlined';

export default RefIcon;
