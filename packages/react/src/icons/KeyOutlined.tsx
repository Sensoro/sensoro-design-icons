// This icon file is generated automatically.
import * as React from 'react';
import KeyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/KeyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KeyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KeyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KeyOutlined);

RefIcon.displayName = 'KeyOutlined';

export default RefIcon;
