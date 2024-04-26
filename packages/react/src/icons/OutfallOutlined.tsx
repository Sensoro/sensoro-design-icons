// This icon file is generated automatically.
import * as React from 'react';
import OutfallOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OutfallOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OutfallOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OutfallOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OutfallOutlined);

RefIcon.displayName = 'OutfallOutlined';

export default RefIcon;
