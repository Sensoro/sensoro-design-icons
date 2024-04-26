// This icon file is generated automatically.
import * as React from 'react';
import ArcDetectionOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArcDetectionOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArcDetectionOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArcDetectionOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArcDetectionOutlined);

RefIcon.displayName = 'ArcDetectionOutlined';

export default RefIcon;
