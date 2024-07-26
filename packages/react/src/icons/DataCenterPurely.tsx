// This icon file is generated automatically.
import * as React from 'react';
import DataCenterPurelySvg from '@sensoro-design/icons-svg/es/asn/DataCenterPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DataCenterPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DataCenterPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DataCenterPurely);

RefIcon.displayName = 'DataCenterPurely';

export default RefIcon;
