// This icon file is generated automatically.
import * as React from 'react';
import MoneyWatchFilledSvg from '@sensoro-design/icons-svg/es/asn/MoneyWatchFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MoneyWatchFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MoneyWatchFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MoneyWatchFilled);

RefIcon.displayName = 'MoneyWatchFilled';

export default RefIcon;
