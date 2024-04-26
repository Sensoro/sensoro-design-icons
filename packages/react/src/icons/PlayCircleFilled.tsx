// This icon file is generated automatically.
import * as React from 'react';
import PlayCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/PlayCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlayCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlayCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlayCircleFilled);

RefIcon.displayName = 'PlayCircleFilled';

export default RefIcon;
