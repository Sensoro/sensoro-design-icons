// This icon file is generated automatically.
import * as React from 'react';
import ExclamationCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/ExclamationCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ExclamationCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ExclamationCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ExclamationCircleFilled);

RefIcon.displayName = 'ExclamationCircleFilled';

export default RefIcon;
