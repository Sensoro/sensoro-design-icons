// This icon file is generated automatically.
import * as React from 'react';
import RightTurnOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RightTurnOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RightTurnOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RightTurnOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RightTurnOutlined);

RefIcon.displayName = 'RightTurnOutlined';

export default RefIcon;
