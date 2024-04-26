// This icon file is generated automatically.
import * as React from 'react';
import AudioOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AudioOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudioOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudioOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudioOutlined);

RefIcon.displayName = 'AudioOutlined';

export default RefIcon;
