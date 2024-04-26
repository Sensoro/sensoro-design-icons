// This icon file is generated automatically.
import * as React from 'react';
import TimeCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/TimeCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TimeCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TimeCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TimeCircleFilled);

RefIcon.displayName = 'TimeCircleFilled';

export default RefIcon;
