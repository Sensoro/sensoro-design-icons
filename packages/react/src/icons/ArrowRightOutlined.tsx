// This icon file is generated automatically.
import * as React from 'react';
import ArrowRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowRightOutlined);

RefIcon.displayName = 'ArrowRightOutlined';

export default RefIcon;
