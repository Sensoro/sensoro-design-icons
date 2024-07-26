// This icon file is generated automatically.
import * as React from 'react';
import AreaGridPurelySvg from '@sensoro-design/icons-svg/es/asn/AreaGridPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AreaGridPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AreaGridPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AreaGridPurely);

RefIcon.displayName = 'AreaGridPurely';

export default RefIcon;
