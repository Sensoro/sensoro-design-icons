// This icon file is generated automatically.
import * as React from 'react';
import PigeonholeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PigeonholeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PigeonholeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PigeonholeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PigeonholeOutlined);

RefIcon.displayName = 'PigeonholeOutlined';

export default RefIcon;
