// This icon file is generated automatically.
import * as React from 'react';
import FullscreenExitProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FullscreenExitProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FullscreenExitProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FullscreenExitProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FullscreenExitProOutlined);

RefIcon.displayName = 'FullscreenExitProOutlined';

export default RefIcon;
