// This icon file is generated automatically.
import * as React from 'react';
import UserGatherPurelySvg from '@sensoro-design/icons-svg/es/asn/UserGatherPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserGatherPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserGatherPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserGatherPurely);

RefIcon.displayName = 'UserGatherPurely';

export default RefIcon;
