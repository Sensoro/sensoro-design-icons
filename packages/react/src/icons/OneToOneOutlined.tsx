// This icon file is generated automatically.
import * as React from 'react';
import OneToOneOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OneToOneOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OneToOneOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OneToOneOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OneToOneOutlined);

RefIcon.displayName = 'OneToOneOutlined';

export default RefIcon;
