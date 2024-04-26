// This icon file is generated automatically.
import * as React from 'react';
import SoundSmallOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SoundSmallOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SoundSmallOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SoundSmallOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SoundSmallOutlined);

RefIcon.displayName = 'SoundSmallOutlined';

export default RefIcon;
