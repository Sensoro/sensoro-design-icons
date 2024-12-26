// This icon file is generated automatically.
import * as React from 'react';
import TurnLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TurnLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TurnLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TurnLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TurnLeftOutlined);

RefIcon.displayName = 'TurnLeftOutlined';

export default RefIcon;
