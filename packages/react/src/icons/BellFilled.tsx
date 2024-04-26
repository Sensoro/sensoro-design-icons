// This icon file is generated automatically.
import * as React from 'react';
import BellFilledSvg from '@sensoro-design/icons-svg/es/asn/BellFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BellFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BellFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BellFilled);

RefIcon.displayName = 'BellFilled';

export default RefIcon;
