// This icon file is generated automatically.
import * as React from 'react';
import FiremenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FiremenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FiremenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FiremenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FiremenOutlined);

RefIcon.displayName = 'FiremenOutlined';

export default RefIcon;
