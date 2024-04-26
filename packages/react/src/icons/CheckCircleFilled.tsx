// This icon file is generated automatically.
import * as React from 'react';
import CheckCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/CheckCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CheckCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CheckCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CheckCircleFilled);

RefIcon.displayName = 'CheckCircleFilled';

export default RefIcon;
