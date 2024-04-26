// This icon file is generated automatically.
import * as React from 'react';
import ForeignWorkersPurelySvg from '@sensoro-design/icons-svg/es/asn/ForeignWorkersPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ForeignWorkersPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ForeignWorkersPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ForeignWorkersPurely);

RefIcon.displayName = 'ForeignWorkersPurely';

export default RefIcon;
