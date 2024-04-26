// This icon file is generated automatically.
import * as React from 'react';
import CompassOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CompassOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CompassOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CompassOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CompassOutlined);

RefIcon.displayName = 'CompassOutlined';

export default RefIcon;
