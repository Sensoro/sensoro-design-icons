// This icon file is generated automatically.
import * as React from 'react';
import RoomFilledSvg from '@sensoro-design/icons-svg/es/asn/RoomFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RoomFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RoomFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RoomFilled);

RefIcon.displayName = 'RoomFilled';

export default RefIcon;
