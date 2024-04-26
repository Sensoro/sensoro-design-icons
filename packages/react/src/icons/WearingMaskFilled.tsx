// This icon file is generated automatically.
import * as React from 'react';
import WearingMaskFilledSvg from '@sensoro-design/icons-svg/es/asn/WearingMaskFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WearingMaskFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WearingMaskFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WearingMaskFilled);

RefIcon.displayName = 'WearingMaskFilled';

export default RefIcon;
