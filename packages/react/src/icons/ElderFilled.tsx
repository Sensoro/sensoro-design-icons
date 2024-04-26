// This icon file is generated automatically.
import * as React from 'react';
import ElderFilledSvg from '@sensoro-design/icons-svg/es/asn/ElderFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElderFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElderFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElderFilled);

RefIcon.displayName = 'ElderFilled';

export default RefIcon;
