// This icon file is generated automatically.
import * as React from 'react';
import CheckCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CheckCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CheckCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CheckCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CheckCircleOutlined);

RefIcon.displayName = 'CheckCircleOutlined';

export default RefIcon;
