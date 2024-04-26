// This icon file is generated automatically.
import * as React from 'react';
import AccountBookFilledSvg from '@sensoro-design/icons-svg/es/asn/AccountBookFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AccountBookFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AccountBookFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AccountBookFilled);

RefIcon.displayName = 'AccountBookFilled';

export default RefIcon;
