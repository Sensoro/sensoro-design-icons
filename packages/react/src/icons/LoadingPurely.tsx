// This icon file is generated automatically.
import * as React from 'react';
import LoadingPurelySvg from '@sensoro-design/icons-svg/es/asn/LoadingPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LoadingPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LoadingPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LoadingPurely);

RefIcon.displayName = 'LoadingPurely';

export default RefIcon;
