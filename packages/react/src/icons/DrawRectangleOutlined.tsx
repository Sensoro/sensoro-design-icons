// This icon file is generated automatically.
import * as React from 'react';
import DrawRectangleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DrawRectangleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DrawRectangleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DrawRectangleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DrawRectangleOutlined);

RefIcon.displayName = 'DrawRectangleOutlined';

export default RefIcon;
