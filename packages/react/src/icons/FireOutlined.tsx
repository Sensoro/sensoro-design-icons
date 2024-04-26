// This icon file is generated automatically.
import * as React from 'react';
import FireOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireOutlined);

RefIcon.displayName = 'FireOutlined';

export default RefIcon;
