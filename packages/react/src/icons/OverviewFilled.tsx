// This icon file is generated automatically.
import * as React from 'react';
import OverviewFilledSvg from '@sensoro-design/icons-svg/es/asn/OverviewFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OverviewFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OverviewFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OverviewFilled);

RefIcon.displayName = 'OverviewFilled';

export default RefIcon;
