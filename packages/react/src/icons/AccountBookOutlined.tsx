// This icon file is generated automatically.
import * as React from 'react';
import AccountBookOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AccountBookOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AccountBookOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AccountBookOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AccountBookOutlined);

RefIcon.displayName = 'AccountBookOutlined';

export default RefIcon;
