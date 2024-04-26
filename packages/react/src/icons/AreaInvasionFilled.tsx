// This icon file is generated automatically.
import * as React from 'react';
import AreaInvasionFilledSvg from '@sensoro-design/icons-svg/es/asn/AreaInvasionFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AreaInvasionFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AreaInvasionFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AreaInvasionFilled);

RefIcon.displayName = 'AreaInvasionFilled';

export default RefIcon;
