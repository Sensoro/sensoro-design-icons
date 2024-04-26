// This icon file is generated automatically.
import * as React from 'react';
import SwapOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SwapOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SwapOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SwapOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SwapOutlined);

RefIcon.displayName = 'SwapOutlined';

export default RefIcon;
