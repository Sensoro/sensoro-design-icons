// This icon file is generated automatically.
import * as React from 'react';
import NoVideoPurelySvg from '@sensoro-design/icons-svg/es/asn/NoVideoPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoVideoPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoVideoPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoVideoPurely);

RefIcon.displayName = 'NoVideoPurely';

export default RefIcon;
