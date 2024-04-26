// This icon file is generated automatically.
import * as React from 'react';
import PolygonLayerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PolygonLayerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PolygonLayerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PolygonLayerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PolygonLayerOutlined);

RefIcon.displayName = 'PolygonLayerOutlined';

export default RefIcon;
