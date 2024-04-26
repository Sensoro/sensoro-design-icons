// This icon file is generated automatically.
import * as React from 'react';
import PlayCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlayCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlayCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlayCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlayCircleOutlined);

RefIcon.displayName = 'PlayCircleOutlined';

export default RefIcon;
