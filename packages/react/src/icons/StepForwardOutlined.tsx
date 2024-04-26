// This icon file is generated automatically.
import * as React from 'react';
import StepForwardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StepForwardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StepForwardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StepForwardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StepForwardOutlined);

RefIcon.displayName = 'StepForwardOutlined';

export default RefIcon;
