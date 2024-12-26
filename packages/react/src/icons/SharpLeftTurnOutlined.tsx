// This icon file is generated automatically.
import * as React from 'react';
import SharpLeftTurnOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SharpLeftTurnOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SharpLeftTurnOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SharpLeftTurnOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SharpLeftTurnOutlined);

RefIcon.displayName = 'SharpLeftTurnOutlined';

export default RefIcon;
