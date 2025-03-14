// This icon file is generated automatically.
import * as React from 'react';
import SendFilledSvg from '@sensoro-design/icons-svg/es/asn/SendFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SendFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SendFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SendFilled);

RefIcon.displayName = 'SendFilled';

export default RefIcon;
