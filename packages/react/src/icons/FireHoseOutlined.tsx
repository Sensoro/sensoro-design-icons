// This icon file is generated automatically.
import * as React from 'react';
import FireHoseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireHoseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHoseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHoseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHoseOutlined);

RefIcon.displayName = 'FireHoseOutlined';

export default RefIcon;
