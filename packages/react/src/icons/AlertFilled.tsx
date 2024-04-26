// This icon file is generated automatically.
import * as React from 'react';
import AlertFilledSvg from '@sensoro-design/icons-svg/es/asn/AlertFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlertFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlertFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlertFilled);

RefIcon.displayName = 'AlertFilled';

export default RefIcon;
