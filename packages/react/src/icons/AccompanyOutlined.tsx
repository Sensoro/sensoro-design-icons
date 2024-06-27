// This icon file is generated automatically.
import * as React from 'react';
import AccompanyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AccompanyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AccompanyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AccompanyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AccompanyOutlined);

RefIcon.displayName = 'AccompanyOutlined';

export default RefIcon;
