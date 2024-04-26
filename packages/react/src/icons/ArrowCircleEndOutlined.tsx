// This icon file is generated automatically.
import * as React from 'react';
import ArrowCircleEndOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowCircleEndOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowCircleEndOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowCircleEndOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowCircleEndOutlined);

RefIcon.displayName = 'ArrowCircleEndOutlined';

export default RefIcon;
