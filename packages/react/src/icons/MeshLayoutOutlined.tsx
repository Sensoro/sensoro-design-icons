// This icon file is generated automatically.
import * as React from 'react';
import MeshLayoutOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MeshLayoutOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MeshLayoutOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MeshLayoutOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MeshLayoutOutlined);

RefIcon.displayName = 'MeshLayoutOutlined';

export default RefIcon;
