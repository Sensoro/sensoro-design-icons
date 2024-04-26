// This icon file is generated automatically.
import * as React from 'react';
import LightningFilledSvg from '@sensoro-design/icons-svg/es/asn/LightningFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LightningFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LightningFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LightningFilled);

RefIcon.displayName = 'LightningFilled';

export default RefIcon;
