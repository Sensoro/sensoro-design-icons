// This icon file is generated automatically.
import * as React from 'react';
import QrcodeFilledSvg from '@sensoro-design/icons-svg/es/asn/QrcodeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const QrcodeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={QrcodeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(QrcodeFilled);

RefIcon.displayName = 'QrcodeFilled';

export default RefIcon;
