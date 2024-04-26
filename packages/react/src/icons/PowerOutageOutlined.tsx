// This icon file is generated automatically.
import * as React from 'react';
import PowerOutageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PowerOutageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerOutageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerOutageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerOutageOutlined);

RefIcon.displayName = 'PowerOutageOutlined';

export default RefIcon;
