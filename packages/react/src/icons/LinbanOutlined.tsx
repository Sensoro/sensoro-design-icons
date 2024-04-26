// This icon file is generated automatically.
import * as React from 'react';
import LinbanOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LinbanOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LinbanOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LinbanOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LinbanOutlined);

RefIcon.displayName = 'LinbanOutlined';

export default RefIcon;
