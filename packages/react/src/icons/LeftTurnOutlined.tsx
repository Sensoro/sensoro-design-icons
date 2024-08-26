// This icon file is generated automatically.
import * as React from 'react';
import LeftTurnOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeftTurnOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeftTurnOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeftTurnOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeftTurnOutlined);

RefIcon.displayName = 'LeftTurnOutlined';

export default RefIcon;
