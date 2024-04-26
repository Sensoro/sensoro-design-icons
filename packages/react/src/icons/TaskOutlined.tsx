// This icon file is generated automatically.
import * as React from 'react';
import TaskOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TaskOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TaskOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TaskOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TaskOutlined);

RefIcon.displayName = 'TaskOutlined';

export default RefIcon;
