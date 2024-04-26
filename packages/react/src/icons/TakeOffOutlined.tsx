// This icon file is generated automatically.
import * as React from 'react';
import TakeOffOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TakeOffOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TakeOffOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TakeOffOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TakeOffOutlined);

RefIcon.displayName = 'TakeOffOutlined';

export default RefIcon;
