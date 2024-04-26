// This icon file is generated automatically.
import * as React from 'react';
import RoomOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RoomOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RoomOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RoomOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RoomOutlined);

RefIcon.displayName = 'RoomOutlined';

export default RefIcon;
