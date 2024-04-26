// This icon file is generated automatically.
import * as React from 'react';
import ControllerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ControllerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ControllerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ControllerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ControllerOutlined);

RefIcon.displayName = 'ControllerOutlined';

export default RefIcon;
