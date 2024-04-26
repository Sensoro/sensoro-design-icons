// This icon file is generated automatically.
import * as React from 'react';
import SportsFacilitiesFilledSvg from '@sensoro-design/icons-svg/es/asn/SportsFacilitiesFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SportsFacilitiesFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SportsFacilitiesFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SportsFacilitiesFilled);

RefIcon.displayName = 'SportsFacilitiesFilled';

export default RefIcon;
