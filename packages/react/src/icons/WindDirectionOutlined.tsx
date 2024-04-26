// This icon file is generated automatically.
import * as React from 'react';
import WindDirectionOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WindDirectionOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WindDirectionOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WindDirectionOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WindDirectionOutlined);

RefIcon.displayName = 'WindDirectionOutlined';

export default RefIcon;
