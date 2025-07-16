// This icon file is generated automatically.
import * as React from 'react';
import CallBackOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CallBackOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CallBackOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CallBackOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CallBackOutlined);

RefIcon.displayName = 'CallBackOutlined';

export default RefIcon;
