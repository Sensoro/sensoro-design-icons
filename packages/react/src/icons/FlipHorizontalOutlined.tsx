// This icon file is generated automatically.
import * as React from 'react';
import FlipHorizontalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FlipHorizontalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FlipHorizontalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FlipHorizontalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FlipHorizontalOutlined);

RefIcon.displayName = 'FlipHorizontalOutlined';

export default RefIcon;
