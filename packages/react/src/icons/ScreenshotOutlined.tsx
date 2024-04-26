// This icon file is generated automatically.
import * as React from 'react';
import ScreenshotOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScreenshotOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScreenshotOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScreenshotOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScreenshotOutlined);

RefIcon.displayName = 'ScreenshotOutlined';

export default RefIcon;
