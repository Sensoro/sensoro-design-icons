// This icon file is generated automatically.
import * as React from 'react';
import GetUpOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GetUpOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GetUpOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GetUpOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GetUpOutlined);

RefIcon.displayName = 'GetUpOutlined';

export default RefIcon;
