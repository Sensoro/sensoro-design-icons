// This icon file is generated automatically.
import * as React from 'react';
import PlaneOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlaneOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlaneOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlaneOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlaneOutlined);

RefIcon.displayName = 'PlaneOutlined';

export default RefIcon;
