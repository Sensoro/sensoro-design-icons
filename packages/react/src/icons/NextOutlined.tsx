// This icon file is generated automatically.
import * as React from 'react';
import NextOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NextOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NextOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NextOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NextOutlined);

RefIcon.displayName = 'NextOutlined';

export default RefIcon;
