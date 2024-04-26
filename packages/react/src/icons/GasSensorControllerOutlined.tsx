// This icon file is generated automatically.
import * as React from 'react';
import GasSensorControllerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GasSensorControllerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasSensorControllerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasSensorControllerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasSensorControllerOutlined);

RefIcon.displayName = 'GasSensorControllerOutlined';

export default RefIcon;
