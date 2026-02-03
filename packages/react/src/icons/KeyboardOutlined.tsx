// This icon file is generated automatically.
import * as React from 'react';
import KeyboardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/KeyboardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KeyboardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KeyboardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KeyboardOutlined);

RefIcon.displayName = 'KeyboardOutlined';

export default RefIcon;
