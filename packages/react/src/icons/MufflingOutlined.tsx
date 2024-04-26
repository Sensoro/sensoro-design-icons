// This icon file is generated automatically.
import * as React from 'react';
import MufflingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MufflingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MufflingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MufflingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MufflingOutlined);

RefIcon.displayName = 'MufflingOutlined';

export default RefIcon;
