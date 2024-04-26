// This icon file is generated automatically.
import * as React from 'react';
import RotateLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RotateLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RotateLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RotateLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RotateLeftOutlined);

RefIcon.displayName = 'RotateLeftOutlined';

export default RefIcon;
