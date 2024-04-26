// This icon file is generated automatically.
import * as React from 'react';
import DataInsightsFilledSvg from '@sensoro-design/icons-svg/es/asn/DataInsightsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DataInsightsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DataInsightsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DataInsightsFilled);

RefIcon.displayName = 'DataInsightsFilled';

export default RefIcon;
