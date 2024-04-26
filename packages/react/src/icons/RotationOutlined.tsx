// This icon file is generated automatically.
import * as React from 'react';
import RotationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RotationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RotationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RotationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RotationOutlined);

RefIcon.displayName = 'RotationOutlined';

export default RefIcon;
