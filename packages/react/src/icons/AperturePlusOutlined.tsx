// This icon file is generated automatically.
import * as React from 'react';
import AperturePlusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AperturePlusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AperturePlusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AperturePlusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AperturePlusOutlined);

RefIcon.displayName = 'AperturePlusOutlined';

export default RefIcon;
