// This icon file is generated automatically.
import * as React from 'react';
import DigitalMediaFilledSvg from '@sensoro-design/icons-svg/es/asn/DigitalMediaFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DigitalMediaFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DigitalMediaFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DigitalMediaFilled);

RefIcon.displayName = 'DigitalMediaFilled';

export default RefIcon;
