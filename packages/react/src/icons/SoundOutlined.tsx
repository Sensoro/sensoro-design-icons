// This icon file is generated automatically.
import * as React from 'react';
import SoundOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SoundOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SoundOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SoundOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SoundOutlined);

RefIcon.displayName = 'SoundOutlined';

export default RefIcon;
