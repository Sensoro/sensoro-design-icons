// This icon file is generated automatically.
import * as React from 'react';
import ScreencastOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScreencastOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScreencastOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScreencastOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScreencastOutlined);

RefIcon.displayName = 'ScreencastOutlined';

export default RefIcon;
