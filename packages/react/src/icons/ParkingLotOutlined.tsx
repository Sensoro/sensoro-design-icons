// This icon file is generated automatically.
import * as React from 'react';
import ParkingLotOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ParkingLotOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ParkingLotOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ParkingLotOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ParkingLotOutlined);

RefIcon.displayName = 'ParkingLotOutlined';

export default RefIcon;
