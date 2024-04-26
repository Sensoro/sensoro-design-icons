// This icon file is generated automatically.
import * as React from 'react';
import PlateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlateOutlined);

RefIcon.displayName = 'PlateOutlined';

export default RefIcon;
