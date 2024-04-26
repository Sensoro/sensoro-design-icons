// This icon file is generated automatically.
import * as React from 'react';
import BurningPointOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BurningPointOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BurningPointOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BurningPointOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BurningPointOutlined);

RefIcon.displayName = 'BurningPointOutlined';

export default RefIcon;
