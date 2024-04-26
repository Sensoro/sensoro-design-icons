// This icon file is generated automatically.
import * as React from 'react';
import AuthOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AuthOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AuthOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AuthOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AuthOutlined);

RefIcon.displayName = 'AuthOutlined';

export default RefIcon;
