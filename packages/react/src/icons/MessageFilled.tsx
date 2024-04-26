// This icon file is generated automatically.
import * as React from 'react';
import MessageFilledSvg from '@sensoro-design/icons-svg/es/asn/MessageFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MessageFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MessageFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MessageFilled);

RefIcon.displayName = 'MessageFilled';

export default RefIcon;
