// This icon file is generated automatically.
import * as React from 'react';
import FullscreenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FullscreenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FullscreenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FullscreenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FullscreenOutlined);

RefIcon.displayName = 'FullscreenOutlined';

export default RefIcon;
