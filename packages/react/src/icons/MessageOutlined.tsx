// This icon file is generated automatically.
import * as React from 'react';
import MessageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MessageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MessageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MessageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MessageOutlined);

RefIcon.displayName = 'MessageOutlined';

export default RefIcon;
