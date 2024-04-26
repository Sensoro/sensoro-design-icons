// This icon file is generated automatically.
import * as React from 'react';
import StepCountOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StepCountOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StepCountOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StepCountOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StepCountOutlined);

RefIcon.displayName = 'StepCountOutlined';

export default RefIcon;
