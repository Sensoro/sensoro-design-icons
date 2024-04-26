// This icon file is generated automatically.
import * as React from 'react';
import ZoomOutOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ZoomOutOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ZoomOutOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ZoomOutOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ZoomOutOutlined);

RefIcon.displayName = 'ZoomOutOutlined';

export default RefIcon;
