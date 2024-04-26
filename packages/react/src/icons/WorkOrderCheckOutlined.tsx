// This icon file is generated automatically.
import * as React from 'react';
import WorkOrderCheckOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WorkOrderCheckOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WorkOrderCheckOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WorkOrderCheckOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WorkOrderCheckOutlined);

RefIcon.displayName = 'WorkOrderCheckOutlined';

export default RefIcon;
