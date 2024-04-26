// This icon file is generated automatically.
import * as React from 'react';
import LayoutOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LayoutOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LayoutOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LayoutOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LayoutOutlined);

RefIcon.displayName = 'LayoutOutlined';

export default RefIcon;
