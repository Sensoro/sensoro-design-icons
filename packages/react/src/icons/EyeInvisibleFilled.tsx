// This icon file is generated automatically.
import * as React from 'react';
import EyeInvisibleFilledSvg from '@sensoro-design/icons-svg/es/asn/EyeInvisibleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EyeInvisibleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EyeInvisibleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EyeInvisibleFilled);

RefIcon.displayName = 'EyeInvisibleFilled';

export default RefIcon;
