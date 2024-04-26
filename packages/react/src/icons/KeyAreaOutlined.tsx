// This icon file is generated automatically.
import * as React from 'react';
import KeyAreaOutlinedSvg from '@sensoro-design/icons-svg/es/asn/KeyAreaOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KeyAreaOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KeyAreaOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KeyAreaOutlined);

RefIcon.displayName = 'KeyAreaOutlined';

export default RefIcon;
