// This icon file is generated automatically.
import * as React from 'react';
import SuppliesFilledSvg from '@sensoro-design/icons-svg/es/asn/SuppliesFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SuppliesFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SuppliesFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SuppliesFilled);

RefIcon.displayName = 'SuppliesFilled';

export default RefIcon;
