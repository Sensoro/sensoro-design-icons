// This icon file is generated automatically.
import * as React from 'react';
import TurnAroundOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TurnAroundOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TurnAroundOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TurnAroundOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TurnAroundOutlined);

RefIcon.displayName = 'TurnAroundOutlined';

export default RefIcon;
