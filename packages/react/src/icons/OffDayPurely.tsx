// This icon file is generated automatically.
import * as React from 'react';
import OffDayPurelySvg from '@sensoro-design/icons-svg/es/asn/OffDayPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OffDayPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OffDayPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OffDayPurely);

RefIcon.displayName = 'OffDayPurely';

export default RefIcon;
