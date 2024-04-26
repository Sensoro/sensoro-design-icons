// This icon file is generated automatically.
import * as React from 'react';
import HorizontalBottomOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HorizontalBottomOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HorizontalBottomOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HorizontalBottomOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HorizontalBottomOutlined);

RefIcon.displayName = 'HorizontalBottomOutlined';

export default RefIcon;
