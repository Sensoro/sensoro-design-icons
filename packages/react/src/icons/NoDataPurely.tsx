// This icon file is generated automatically.
import * as React from 'react';
import NoDataPurelySvg from '@sensoro-design/icons-svg/es/asn/NoDataPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoDataPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoDataPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoDataPurely);

RefIcon.displayName = 'NoDataPurely';

export default RefIcon;
