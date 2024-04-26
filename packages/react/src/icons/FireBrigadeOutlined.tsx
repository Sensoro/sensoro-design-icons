// This icon file is generated automatically.
import * as React from 'react';
import FireBrigadeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireBrigadeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireBrigadeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireBrigadeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireBrigadeOutlined);

RefIcon.displayName = 'FireBrigadeOutlined';

export default RefIcon;
