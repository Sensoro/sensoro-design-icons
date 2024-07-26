// This icon file is generated automatically.
import * as React from 'react';
import PetDogOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PetDogOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PetDogOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PetDogOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PetDogOutlined);

RefIcon.displayName = 'PetDogOutlined';

export default RefIcon;
