// This icon file is generated automatically.
import * as React from 'react';
import FlashlightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FlashlightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FlashlightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FlashlightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FlashlightOutlined);

RefIcon.displayName = 'FlashlightOutlined';

export default RefIcon;
