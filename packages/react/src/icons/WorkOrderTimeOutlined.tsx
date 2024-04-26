// This icon file is generated automatically.
import * as React from 'react';
import WorkOrderTimeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WorkOrderTimeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WorkOrderTimeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WorkOrderTimeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WorkOrderTimeOutlined);

RefIcon.displayName = 'WorkOrderTimeOutlined';

export default RefIcon;
