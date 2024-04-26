// This icon file is generated automatically.
import * as React from 'react';
import CakeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CakeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CakeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CakeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CakeOutlined);

RefIcon.displayName = 'CakeOutlined';

export default RefIcon;
