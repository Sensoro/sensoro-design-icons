// This icon file is generated automatically.
import * as React from 'react';
import NoFishingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NoFishingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoFishingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoFishingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoFishingOutlined);

RefIcon.displayName = 'NoFishingOutlined';

export default RefIcon;
