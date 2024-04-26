// This icon file is generated automatically.
import * as React from 'react';
import TimeCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TimeCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TimeCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TimeCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TimeCircleOutlined);

RefIcon.displayName = 'TimeCircleOutlined';

export default RefIcon;
