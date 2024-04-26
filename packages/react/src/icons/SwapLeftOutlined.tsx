// This icon file is generated automatically.
import * as React from 'react';
import SwapLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SwapLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SwapLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SwapLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SwapLeftOutlined);

RefIcon.displayName = 'SwapLeftOutlined';

export default RefIcon;
