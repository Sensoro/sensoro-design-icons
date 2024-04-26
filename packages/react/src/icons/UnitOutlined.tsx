// This icon file is generated automatically.
import * as React from 'react';
import UnitOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UnitOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UnitOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UnitOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UnitOutlined);

RefIcon.displayName = 'UnitOutlined';

export default RefIcon;
