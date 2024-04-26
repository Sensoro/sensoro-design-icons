// This icon file is generated automatically.
import * as React from 'react';
import FullscreenProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FullscreenProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FullscreenProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FullscreenProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FullscreenProOutlined);

RefIcon.displayName = 'FullscreenProOutlined';

export default RefIcon;
