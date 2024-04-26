// This icon file is generated automatically.
import * as React from 'react';
import AudioMutedFilledSvg from '@sensoro-design/icons-svg/es/asn/AudioMutedFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudioMutedFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudioMutedFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudioMutedFilled);

RefIcon.displayName = 'AudioMutedFilled';

export default RefIcon;
