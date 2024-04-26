// This icon file is generated automatically.
import * as React from 'react';
import PhoneFilledSvg from '@sensoro-design/icons-svg/es/asn/PhoneFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PhoneFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PhoneFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PhoneFilled);

RefIcon.displayName = 'PhoneFilled';

export default RefIcon;
