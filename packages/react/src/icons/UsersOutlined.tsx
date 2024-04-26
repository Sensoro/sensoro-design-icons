// This icon file is generated automatically.
import * as React from 'react';
import UsersOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UsersOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UsersOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UsersOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UsersOutlined);

RefIcon.displayName = 'UsersOutlined';

export default RefIcon;
