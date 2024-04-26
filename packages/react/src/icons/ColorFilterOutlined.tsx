// This icon file is generated automatically.
import * as React from 'react';
import ColorFilterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ColorFilterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ColorFilterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ColorFilterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ColorFilterOutlined);

RefIcon.displayName = 'ColorFilterOutlined';

export default RefIcon;
