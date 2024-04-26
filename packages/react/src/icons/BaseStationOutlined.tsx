// This icon file is generated automatically.
import * as React from 'react';
import BaseStationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BaseStationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BaseStationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BaseStationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BaseStationOutlined);

RefIcon.displayName = 'BaseStationOutlined';

export default RefIcon;
