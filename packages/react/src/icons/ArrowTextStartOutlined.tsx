// This icon file is generated automatically.
import * as React from 'react';
import ArrowTextStartOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowTextStartOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowTextStartOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowTextStartOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowTextStartOutlined);

RefIcon.displayName = 'ArrowTextStartOutlined';

export default RefIcon;
