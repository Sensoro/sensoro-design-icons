// This icon file is generated automatically.
import * as React from 'react';
import RotationFilledSvg from '@sensoro-design/icons-svg/es/asn/RotationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RotationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RotationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RotationFilled);

RefIcon.displayName = 'RotationFilled';

export default RefIcon;
