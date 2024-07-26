// This icon file is generated automatically.
import * as React from 'react';
import AtlasPurelySvg from '@sensoro-design/icons-svg/es/asn/AtlasPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AtlasPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AtlasPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AtlasPurely);

RefIcon.displayName = 'AtlasPurely';

export default RefIcon;
