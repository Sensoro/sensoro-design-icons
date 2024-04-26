// This icon file is generated automatically.
import * as React from 'react';
import ArrowTextEndOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowTextEndOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowTextEndOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowTextEndOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowTextEndOutlined);

RefIcon.displayName = 'ArrowTextEndOutlined';

export default RefIcon;
