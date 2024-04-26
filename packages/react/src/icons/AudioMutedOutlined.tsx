// This icon file is generated automatically.
import * as React from 'react';
import AudioMutedOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AudioMutedOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudioMutedOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudioMutedOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudioMutedOutlined);

RefIcon.displayName = 'AudioMutedOutlined';

export default RefIcon;
