// This icon file is generated automatically.
import * as React from 'react';
import GasSensorPurelySvg from '@sensoro-design/icons-svg/es/asn/GasSensorPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasSensorPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasSensorPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasSensorPurely);

RefIcon.displayName = 'GasSensorPurely';

export default RefIcon;
