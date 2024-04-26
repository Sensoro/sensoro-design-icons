// This icon file is generated automatically.
import * as React from 'react';
import PasswordDiskFilledSvg from '@sensoro-design/icons-svg/es/asn/PasswordDiskFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PasswordDiskFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PasswordDiskFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PasswordDiskFilled);

RefIcon.displayName = 'PasswordDiskFilled';

export default RefIcon;
