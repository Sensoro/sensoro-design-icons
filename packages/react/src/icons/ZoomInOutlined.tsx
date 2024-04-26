// This icon file is generated automatically.
import * as React from 'react';
import ZoomInOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ZoomInOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ZoomInOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ZoomInOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ZoomInOutlined);

RefIcon.displayName = 'ZoomInOutlined';

export default RefIcon;
