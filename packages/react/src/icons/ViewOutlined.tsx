// This icon file is generated automatically.
import * as React from 'react';
import ViewOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ViewOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ViewOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ViewOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ViewOutlined);

RefIcon.displayName = 'ViewOutlined';

export default RefIcon;
