// This icon file is generated automatically.
import * as React from 'react';
import ManualOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ManualOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ManualOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ManualOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ManualOutlined);

RefIcon.displayName = 'ManualOutlined';

export default RefIcon;
