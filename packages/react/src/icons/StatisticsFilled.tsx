// This icon file is generated automatically.
import * as React from 'react';
import StatisticsFilledSvg from '@sensoro-design/icons-svg/es/asn/StatisticsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StatisticsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StatisticsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StatisticsFilled);

RefIcon.displayName = 'StatisticsFilled';

export default RefIcon;
