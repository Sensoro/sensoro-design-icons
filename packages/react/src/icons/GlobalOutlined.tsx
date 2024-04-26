// This icon file is generated automatically.
import * as React from 'react';
import GlobalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GlobalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GlobalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GlobalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GlobalOutlined);

RefIcon.displayName = 'GlobalOutlined';

export default RefIcon;
