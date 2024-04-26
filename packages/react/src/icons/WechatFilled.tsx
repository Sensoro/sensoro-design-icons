// This icon file is generated automatically.
import * as React from 'react';
import WechatFilledSvg from '@sensoro-design/icons-svg/es/asn/WechatFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WechatFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WechatFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WechatFilled);

RefIcon.displayName = 'WechatFilled';

export default RefIcon;
