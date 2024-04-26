// This icon file is generated automatically.
import * as React from 'react';
import FrownFilledSvg from '@sensoro-design/icons-svg/es/asn/FrownFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FrownFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FrownFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FrownFilled);

RefIcon.displayName = 'FrownFilled';

export default RefIcon;
