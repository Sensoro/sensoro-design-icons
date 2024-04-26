// This icon file is generated automatically.
import * as React from 'react';
import RightUpOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RightUpOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RightUpOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RightUpOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RightUpOutlined);

RefIcon.displayName = 'RightUpOutlined';

export default RefIcon;
