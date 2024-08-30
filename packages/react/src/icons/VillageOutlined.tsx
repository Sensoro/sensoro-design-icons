// This icon file is generated automatically.
import * as React from 'react';
import VillageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VillageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VillageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VillageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VillageOutlined);

RefIcon.displayName = 'VillageOutlined';

export default RefIcon;
