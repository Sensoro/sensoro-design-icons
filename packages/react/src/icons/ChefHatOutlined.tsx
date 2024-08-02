// This icon file is generated automatically.
import * as React from 'react';
import ChefHatOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ChefHatOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ChefHatOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ChefHatOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ChefHatOutlined);

RefIcon.displayName = 'ChefHatOutlined';

export default RefIcon;
