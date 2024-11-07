// This icon file is generated automatically.
import * as React from 'react';
import AppleFilledSvg from '@sensoro-design/icons-svg/es/asn/AppleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AppleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AppleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AppleFilled);

RefIcon.displayName = 'AppleFilled';

export default RefIcon;
