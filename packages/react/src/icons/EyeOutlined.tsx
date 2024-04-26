// This icon file is generated automatically.
import * as React from 'react';
import EyeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EyeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EyeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EyeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EyeOutlined);

RefIcon.displayName = 'EyeOutlined';

export default RefIcon;
