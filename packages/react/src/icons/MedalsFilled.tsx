// This icon file is generated automatically.
import * as React from 'react';
import MedalsFilledSvg from '@sensoro-design/icons-svg/es/asn/MedalsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MedalsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MedalsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MedalsFilled);

RefIcon.displayName = 'MedalsFilled';

export default RefIcon;
