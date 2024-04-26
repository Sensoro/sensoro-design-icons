// This icon file is generated automatically.
import * as React from 'react';
import ToolOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ToolOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ToolOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ToolOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ToolOutlined);

RefIcon.displayName = 'ToolOutlined';

export default RefIcon;
