// This icon file is generated automatically.
import * as React from 'react';
import PlaneFilledSvg from '@sensoro-design/icons-svg/es/asn/PlaneFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlaneFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlaneFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlaneFilled);

RefIcon.displayName = 'PlaneFilled';

export default RefIcon;
