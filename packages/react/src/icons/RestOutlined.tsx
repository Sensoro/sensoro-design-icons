// This icon file is generated automatically.
import * as React from 'react';
import RestOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RestOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RestOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RestOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RestOutlined);

RefIcon.displayName = 'RestOutlined';

export default RefIcon;
