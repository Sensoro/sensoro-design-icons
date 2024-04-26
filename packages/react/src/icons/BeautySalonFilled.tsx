// This icon file is generated automatically.
import * as React from 'react';
import BeautySalonFilledSvg from '@sensoro-design/icons-svg/es/asn/BeautySalonFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BeautySalonFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BeautySalonFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BeautySalonFilled);

RefIcon.displayName = 'BeautySalonFilled';

export default RefIcon;
