// This icon file is generated automatically.
import * as React from 'react';
import ZoomMinusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ZoomMinusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ZoomMinusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ZoomMinusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ZoomMinusOutlined);

RefIcon.displayName = 'ZoomMinusOutlined';

export default RefIcon;
