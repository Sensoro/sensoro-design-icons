// This icon file is generated automatically.
import * as React from 'react';
import ScenicAreaFilledSvg from '@sensoro-design/icons-svg/es/asn/ScenicAreaFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScenicAreaFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScenicAreaFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScenicAreaFilled);

RefIcon.displayName = 'ScenicAreaFilled';

export default RefIcon;
