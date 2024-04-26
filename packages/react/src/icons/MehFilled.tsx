// This icon file is generated automatically.
import * as React from 'react';
import MehFilledSvg from '@sensoro-design/icons-svg/es/asn/MehFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MehFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MehFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MehFilled);

RefIcon.displayName = 'MehFilled';

export default RefIcon;
