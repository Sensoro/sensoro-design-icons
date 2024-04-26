// This icon file is generated automatically.
import * as React from 'react';
import FaceCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FaceCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FaceCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FaceCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FaceCameraOutlined);

RefIcon.displayName = 'FaceCameraOutlined';

export default RefIcon;
