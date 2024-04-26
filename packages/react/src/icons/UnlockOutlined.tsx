// This icon file is generated automatically.
import * as React from 'react';
import UnlockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UnlockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UnlockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UnlockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UnlockOutlined);

RefIcon.displayName = 'UnlockOutlined';

export default RefIcon;
