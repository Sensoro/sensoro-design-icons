// This icon file is generated automatically.
import * as React from 'react';
import AudioFilledSvg from '@sensoro-design/icons-svg/es/asn/AudioFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudioFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudioFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudioFilled);

RefIcon.displayName = 'AudioFilled';

export default RefIcon;
