// This icon file is generated automatically.
import * as React from 'react';
import ManualAlarmCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ManualAlarmCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ManualAlarmCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ManualAlarmCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ManualAlarmCircleOutlined);

RefIcon.displayName = 'ManualAlarmCircleOutlined';

export default RefIcon;
