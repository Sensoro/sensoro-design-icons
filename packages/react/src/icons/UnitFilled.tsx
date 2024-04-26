// This icon file is generated automatically.
import * as React from 'react';
import UnitFilledSvg from '@sensoro-design/icons-svg/es/asn/UnitFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UnitFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UnitFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UnitFilled);

RefIcon.displayName = 'UnitFilled';

export default RefIcon;
