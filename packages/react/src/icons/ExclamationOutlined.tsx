// This icon file is generated automatically.
import * as React from 'react';
import ExclamationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ExclamationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ExclamationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ExclamationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ExclamationOutlined);

RefIcon.displayName = 'ExclamationOutlined';

export default RefIcon;
