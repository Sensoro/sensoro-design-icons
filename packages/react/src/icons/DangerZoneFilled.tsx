// This icon file is generated automatically.
import * as React from 'react';
import DangerZoneFilledSvg from '@sensoro-design/icons-svg/es/asn/DangerZoneFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DangerZoneFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DangerZoneFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DangerZoneFilled);

RefIcon.displayName = 'DangerZoneFilled';

export default RefIcon;
