// This icon file is generated automatically.
import * as React from 'react';
import TwoSplitScreenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TwoSplitScreenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TwoSplitScreenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TwoSplitScreenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TwoSplitScreenOutlined);

RefIcon.displayName = 'TwoSplitScreenOutlined';

export default RefIcon;
