// This icon file is generated automatically.
import * as React from 'react';
import FullscreenExitOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FullscreenExitOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FullscreenExitOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FullscreenExitOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FullscreenExitOutlined);

RefIcon.displayName = 'FullscreenExitOutlined';

export default RefIcon;
