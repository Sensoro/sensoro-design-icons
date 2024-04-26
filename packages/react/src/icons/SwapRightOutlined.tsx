// This icon file is generated automatically.
import * as React from 'react';
import SwapRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SwapRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SwapRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SwapRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SwapRightOutlined);

RefIcon.displayName = 'SwapRightOutlined';

export default RefIcon;
