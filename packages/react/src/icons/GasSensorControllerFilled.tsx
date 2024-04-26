// This icon file is generated automatically.
import * as React from 'react';
import GasSensorControllerFilledSvg from '@sensoro-design/icons-svg/es/asn/GasSensorControllerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasSensorControllerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasSensorControllerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasSensorControllerFilled);

RefIcon.displayName = 'GasSensorControllerFilled';

export default RefIcon;
