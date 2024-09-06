// This icon file is generated automatically.
import * as React from 'react';
import WorkOrderSuspendedOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WorkOrderSuspendedOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WorkOrderSuspendedOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WorkOrderSuspendedOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WorkOrderSuspendedOutlined);

RefIcon.displayName = 'WorkOrderSuspendedOutlined';

export default RefIcon;
