// This icon file is generated automatically.
import * as React from 'react';
import SplitScreenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SplitScreenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SplitScreenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SplitScreenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SplitScreenOutlined);

RefIcon.displayName = 'SplitScreenOutlined';

export default RefIcon;
