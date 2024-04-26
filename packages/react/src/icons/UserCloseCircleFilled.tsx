// This icon file is generated automatically.
import * as React from 'react';
import UserCloseCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/UserCloseCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserCloseCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserCloseCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserCloseCircleFilled);

RefIcon.displayName = 'UserCloseCircleFilled';

export default RefIcon;
