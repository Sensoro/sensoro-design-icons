// This icon file is generated automatically.
import * as React from 'react';
import ExclamationCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ExclamationCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ExclamationCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ExclamationCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ExclamationCircleOutlined);

RefIcon.displayName = 'ExclamationCircleOutlined';

export default RefIcon;
