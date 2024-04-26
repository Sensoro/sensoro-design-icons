// This icon file is generated automatically.
import * as React from 'react';
import ThirdPurelySvg from '@sensoro-design/icons-svg/es/asn/ThirdPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ThirdPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ThirdPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ThirdPurely);

RefIcon.displayName = 'ThirdPurely';

export default RefIcon;
