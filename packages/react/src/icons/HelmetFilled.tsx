// This icon file is generated automatically.
import * as React from 'react';
import HelmetFilledSvg from '@sensoro-design/icons-svg/es/asn/HelmetFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HelmetFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HelmetFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HelmetFilled);

RefIcon.displayName = 'HelmetFilled';

export default RefIcon;
