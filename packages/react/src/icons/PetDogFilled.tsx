// This icon file is generated automatically.
import * as React from 'react';
import PetDogFilledSvg from '@sensoro-design/icons-svg/es/asn/PetDogFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PetDogFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PetDogFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PetDogFilled);

RefIcon.displayName = 'PetDogFilled';

export default RefIcon;
