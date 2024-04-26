// This icon file is generated automatically.
import * as React from 'react';
import ArrowCircleStartOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowCircleStartOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCircleStartOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCircleStartOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCircleStartOutlined);

RefIcon.displayName = 'ArrowCircleStartOutlined';

export default RefIcon;
