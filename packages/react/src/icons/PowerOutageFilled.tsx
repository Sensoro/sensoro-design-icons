// This icon file is generated automatically.
import * as React from 'react';
import PowerOutageFilledSvg from '@sensoro-design/icons-svg/es/asn/PowerOutageFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerOutageFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerOutageFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerOutageFilled);

RefIcon.displayName = 'PowerOutageFilled';

export default RefIcon;
