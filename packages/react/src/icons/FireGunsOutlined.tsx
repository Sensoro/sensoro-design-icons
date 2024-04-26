// This icon file is generated automatically.
import * as React from 'react';
import FireGunsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireGunsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireGunsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireGunsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireGunsOutlined);

RefIcon.displayName = 'FireGunsOutlined';

export default RefIcon;
