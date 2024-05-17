// This icon file is generated automatically.
import * as React from 'react';
import LoadingProPurelySvg from '@sensoro-design/icons-svg/es/asn/LoadingProPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LoadingProPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LoadingProPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LoadingProPurely);

RefIcon.displayName = 'LoadingProPurely';

export default RefIcon;
