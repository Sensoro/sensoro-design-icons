// This icon file is generated automatically.
import * as React from 'react';
import NaturalGasOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NaturalGasOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NaturalGasOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NaturalGasOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NaturalGasOutlined);

RefIcon.displayName = 'NaturalGasOutlined';

export default RefIcon;
