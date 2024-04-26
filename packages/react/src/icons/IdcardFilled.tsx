// This icon file is generated automatically.
import * as React from 'react';
import IdcardFilledSvg from '@sensoro-design/icons-svg/es/asn/IdcardFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IdcardFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IdcardFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IdcardFilled);

RefIcon.displayName = 'IdcardFilled';

export default RefIcon;
