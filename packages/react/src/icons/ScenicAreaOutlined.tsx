// This icon file is generated automatically.
import * as React from 'react';
import ScenicAreaOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScenicAreaOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScenicAreaOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScenicAreaOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScenicAreaOutlined);

RefIcon.displayName = 'ScenicAreaOutlined';

export default RefIcon;
