// This icon file is generated automatically.
import * as React from 'react';
import LotPurelySvg from '@sensoro-design/icons-svg/es/asn/LotPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LotPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LotPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LotPurely);

RefIcon.displayName = 'LotPurely';

export default RefIcon;
