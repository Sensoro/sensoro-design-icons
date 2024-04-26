// This icon file is generated automatically.
import * as React from 'react';
import FullTargetCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FullTargetCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FullTargetCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FullTargetCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FullTargetCameraOutlined);

RefIcon.displayName = 'FullTargetCameraOutlined';

export default RefIcon;
