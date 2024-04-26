// This icon file is generated automatically.
import * as React from 'react';
import EpidemicProtectionFilledSvg from '@sensoro-design/icons-svg/es/asn/EpidemicProtectionFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EpidemicProtectionFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EpidemicProtectionFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EpidemicProtectionFilled);

RefIcon.displayName = 'EpidemicProtectionFilled';

export default RefIcon;
