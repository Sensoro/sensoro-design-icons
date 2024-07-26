// This icon file is generated automatically.
import * as React from 'react';
import DeviceLinkagePurelySvg from '@sensoro-design/icons-svg/es/asn/DeviceLinkagePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceLinkagePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceLinkagePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceLinkagePurely);

RefIcon.displayName = 'DeviceLinkagePurely';

export default RefIcon;
