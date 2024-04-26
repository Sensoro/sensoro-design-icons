// This icon file is generated automatically.
import * as React from 'react';
import EyeInvisibleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EyeInvisibleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EyeInvisibleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EyeInvisibleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EyeInvisibleOutlined);

RefIcon.displayName = 'EyeInvisibleOutlined';

export default RefIcon;
