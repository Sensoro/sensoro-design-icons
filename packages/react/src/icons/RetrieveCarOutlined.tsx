// This icon file is generated automatically.
import * as React from 'react';
import RetrieveCarOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RetrieveCarOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RetrieveCarOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RetrieveCarOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RetrieveCarOutlined);

RefIcon.displayName = 'RetrieveCarOutlined';

export default RefIcon;
