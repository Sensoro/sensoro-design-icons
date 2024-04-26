// This icon file is generated automatically.
import * as React from 'react';
import RotationCloseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RotationCloseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RotationCloseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RotationCloseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RotationCloseOutlined);

RefIcon.displayName = 'RotationCloseOutlined';

export default RefIcon;
