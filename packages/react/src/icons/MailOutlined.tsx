// This icon file is generated automatically.
import * as React from 'react';
import MailOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MailOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MailOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MailOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MailOutlined);

RefIcon.displayName = 'MailOutlined';

export default RefIcon;
