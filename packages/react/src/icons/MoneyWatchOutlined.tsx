// This icon file is generated automatically.
import * as React from 'react';
import MoneyWatchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MoneyWatchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MoneyWatchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MoneyWatchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MoneyWatchOutlined);

RefIcon.displayName = 'MoneyWatchOutlined';

export default RefIcon;
