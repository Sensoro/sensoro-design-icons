// This icon file is generated automatically.
import * as React from 'react';
import ArrowLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowLeftOutlined);

RefIcon.displayName = 'ArrowLeftOutlined';

export default RefIcon;
