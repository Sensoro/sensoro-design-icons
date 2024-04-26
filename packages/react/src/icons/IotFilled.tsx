// This icon file is generated automatically.
import * as React from 'react';
import IotFilledSvg from '@sensoro-design/icons-svg/es/asn/IotFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IotFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IotFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IotFilled);

RefIcon.displayName = 'IotFilled';

export default RefIcon;
