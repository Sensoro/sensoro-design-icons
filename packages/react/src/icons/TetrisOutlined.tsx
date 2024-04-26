// This icon file is generated automatically.
import * as React from 'react';
import TetrisOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TetrisOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TetrisOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TetrisOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TetrisOutlined);

RefIcon.displayName = 'TetrisOutlined';

export default RefIcon;
