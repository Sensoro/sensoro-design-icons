// This icon file is generated automatically.
import * as React from 'react';
import IotOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IotOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IotOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IotOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IotOutlined);

RefIcon.displayName = 'IotOutlined';

export default RefIcon;
