// This icon file is generated automatically.
import * as React from 'react';
import TaskFilledSvg from '@sensoro-design/icons-svg/es/asn/TaskFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TaskFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TaskFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TaskFilled);

RefIcon.displayName = 'TaskFilled';

export default RefIcon;
