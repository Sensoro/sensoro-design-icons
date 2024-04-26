// This icon file is generated automatically.
import * as React from 'react';
import TyphoonOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TyphoonOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TyphoonOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TyphoonOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TyphoonOutlined);

RefIcon.displayName = 'TyphoonOutlined';

export default RefIcon;
