// This icon file is generated automatically.
import * as React from 'react';
import LoopOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LoopOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LoopOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LoopOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LoopOutlined);

RefIcon.displayName = 'LoopOutlined';

export default RefIcon;
