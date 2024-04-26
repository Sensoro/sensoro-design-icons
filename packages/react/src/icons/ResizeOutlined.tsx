// This icon file is generated automatically.
import * as React from 'react';
import ResizeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ResizeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ResizeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ResizeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ResizeOutlined);

RefIcon.displayName = 'ResizeOutlined';

export default RefIcon;
