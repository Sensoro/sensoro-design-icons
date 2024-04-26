// This icon file is generated automatically.
import * as React from 'react';
import ShakeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShakeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShakeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShakeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShakeOutlined);

RefIcon.displayName = 'ShakeOutlined';

export default RefIcon;
