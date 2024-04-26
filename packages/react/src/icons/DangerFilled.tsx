// This icon file is generated automatically.
import * as React from 'react';
import DangerFilledSvg from '@sensoro-design/icons-svg/es/asn/DangerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DangerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DangerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DangerFilled);

RefIcon.displayName = 'DangerFilled';

export default RefIcon;
