// This icon file is generated automatically.
import * as React from 'react';
import FullTargetOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FullTargetOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FullTargetOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FullTargetOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FullTargetOutlined);

RefIcon.displayName = 'FullTargetOutlined';

export default RefIcon;
