// This icon file is generated automatically.
import * as React from 'react';
import WorkOrderTransferOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WorkOrderTransferOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WorkOrderTransferOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WorkOrderTransferOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WorkOrderTransferOutlined);

RefIcon.displayName = 'WorkOrderTransferOutlined';

export default RefIcon;
