// This icon file is generated automatically.
import * as React from 'react';
import HazeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HazeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HazeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HazeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HazeOutlined);

RefIcon.displayName = 'HazeOutlined';

export default RefIcon;
