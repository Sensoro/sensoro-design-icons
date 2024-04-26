// This icon file is generated automatically.
import * as React from 'react';
import PaintTrayOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PaintTrayOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PaintTrayOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PaintTrayOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PaintTrayOutlined);

RefIcon.displayName = 'PaintTrayOutlined';

export default RefIcon;
