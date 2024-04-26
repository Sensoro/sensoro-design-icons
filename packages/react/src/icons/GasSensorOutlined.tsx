// This icon file is generated automatically.
import * as React from 'react';
import GasSensorOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GasSensorOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasSensorOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasSensorOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasSensorOutlined);

RefIcon.displayName = 'GasSensorOutlined';

export default RefIcon;
