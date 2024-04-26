// This icon file is generated automatically.
import * as React from 'react';
import HiddenDangerFilledSvg from '@sensoro-design/icons-svg/es/asn/HiddenDangerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HiddenDangerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HiddenDangerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HiddenDangerFilled);

RefIcon.displayName = 'HiddenDangerFilled';

export default RefIcon;
