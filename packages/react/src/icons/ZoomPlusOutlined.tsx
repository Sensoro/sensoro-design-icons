// This icon file is generated automatically.
import * as React from 'react';
import ZoomPlusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ZoomPlusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ZoomPlusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ZoomPlusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ZoomPlusOutlined);

RefIcon.displayName = 'ZoomPlusOutlined';

export default RefIcon;
