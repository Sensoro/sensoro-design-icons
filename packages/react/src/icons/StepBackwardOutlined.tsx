// This icon file is generated automatically.
import * as React from 'react';
import StepBackwardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StepBackwardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StepBackwardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StepBackwardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StepBackwardOutlined);

RefIcon.displayName = 'StepBackwardOutlined';

export default RefIcon;
