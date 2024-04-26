// This icon file is generated automatically.
import * as React from 'react';
import CallVideoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CallVideoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CallVideoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CallVideoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CallVideoOutlined);

RefIcon.displayName = 'CallVideoOutlined';

export default RefIcon;
