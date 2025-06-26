// This icon file is generated automatically.
import * as React from 'react';
import ApiOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ApiOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ApiOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ApiOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ApiOutlined);

RefIcon.displayName = 'ApiOutlined';

export default RefIcon;
