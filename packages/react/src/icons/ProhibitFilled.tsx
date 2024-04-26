// This icon file is generated automatically.
import * as React from 'react';
import ProhibitFilledSvg from '@sensoro-design/icons-svg/es/asn/ProhibitFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ProhibitFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ProhibitFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ProhibitFilled);

RefIcon.displayName = 'ProhibitFilled';

export default RefIcon;
