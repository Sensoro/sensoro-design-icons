// This icon file is generated automatically.
import * as React from 'react';
import MemorialFilledSvg from '@sensoro-design/icons-svg/es/asn/MemorialFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MemorialFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MemorialFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MemorialFilled);

RefIcon.displayName = 'MemorialFilled';

export default RefIcon;
