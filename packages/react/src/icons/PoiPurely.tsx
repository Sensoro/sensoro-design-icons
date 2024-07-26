// This icon file is generated automatically.
import * as React from 'react';
import PoiPurelySvg from '@sensoro-design/icons-svg/es/asn/PoiPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PoiPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PoiPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PoiPurely);

RefIcon.displayName = 'PoiPurely';

export default RefIcon;
