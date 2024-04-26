// This icon file is generated automatically.
import * as React from 'react';
import ScreenshotFilledSvg from '@sensoro-design/icons-svg/es/asn/ScreenshotFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScreenshotFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScreenshotFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScreenshotFilled);

RefIcon.displayName = 'ScreenshotFilled';

export default RefIcon;
