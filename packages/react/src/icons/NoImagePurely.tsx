// This icon file is generated automatically.
import * as React from 'react';
import NoImagePurelySvg from '@sensoro-design/icons-svg/es/asn/NoImagePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoImagePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoImagePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoImagePurely);

RefIcon.displayName = 'NoImagePurely';

export default RefIcon;
