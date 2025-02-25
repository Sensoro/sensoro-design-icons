// This icon file is generated automatically.
import * as React from 'react';
import PowerPerceptionOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PowerPerceptionOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerPerceptionOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerPerceptionOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerPerceptionOutlined);

RefIcon.displayName = 'PowerPerceptionOutlined';

export default RefIcon;
