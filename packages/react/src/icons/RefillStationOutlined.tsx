// This icon file is generated automatically.
import * as React from 'react';
import RefillStationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RefillStationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RefillStationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RefillStationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RefillStationOutlined);

RefIcon.displayName = 'RefillStationOutlined';

export default RefIcon;
