// This icon file is generated automatically.
import * as React from 'react';
import PlayCircleProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlayCircleProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlayCircleProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlayCircleProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlayCircleProOutlined);

RefIcon.displayName = 'PlayCircleProOutlined';

export default RefIcon;
