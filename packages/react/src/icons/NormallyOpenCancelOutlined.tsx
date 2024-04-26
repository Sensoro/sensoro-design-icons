// This icon file is generated automatically.
import * as React from 'react';
import NormallyOpenCancelOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NormallyOpenCancelOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NormallyOpenCancelOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NormallyOpenCancelOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NormallyOpenCancelOutlined);

RefIcon.displayName = 'NormallyOpenCancelOutlined';

export default RefIcon;
