// This icon file is generated automatically.
import * as React from 'react';
import WorkOrderReminderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WorkOrderReminderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WorkOrderReminderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WorkOrderReminderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WorkOrderReminderOutlined);

RefIcon.displayName = 'WorkOrderReminderOutlined';

export default RefIcon;
