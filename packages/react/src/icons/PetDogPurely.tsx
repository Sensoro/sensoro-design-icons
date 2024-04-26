// This icon file is generated automatically.
import * as React from 'react';
import PetDogPurelySvg from '@sensoro-design/icons-svg/es/asn/PetDogPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PetDogPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PetDogPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PetDogPurely);

RefIcon.displayName = 'PetDogPurely';

export default RefIcon;
