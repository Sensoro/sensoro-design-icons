// This icon file is generated automatically.
import * as React from 'react';
import DrawPolygonOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DrawPolygonOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DrawPolygonOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DrawPolygonOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DrawPolygonOutlined);

RefIcon.displayName = 'DrawPolygonOutlined';

export default RefIcon;
