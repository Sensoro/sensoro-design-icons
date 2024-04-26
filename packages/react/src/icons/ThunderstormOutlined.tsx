// This icon file is generated automatically.
import * as React from 'react';
import ThunderstormOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ThunderstormOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ThunderstormOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ThunderstormOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ThunderstormOutlined);

RefIcon.displayName = 'ThunderstormOutlined';

export default RefIcon;
