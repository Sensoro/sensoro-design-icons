// This icon file is generated automatically.
import * as React from 'react';
import RefillStationFilledSvg from '@sensoro-design/icons-svg/es/asn/RefillStationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RefillStationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RefillStationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RefillStationFilled);

RefIcon.displayName = 'RefillStationFilled';

export default RefIcon;
