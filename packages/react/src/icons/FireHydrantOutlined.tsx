// This icon file is generated automatically.
import * as React from 'react';
import FireHydrantOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireHydrantOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHydrantOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHydrantOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHydrantOutlined);

RefIcon.displayName = 'FireHydrantOutlined';

export default RefIcon;
