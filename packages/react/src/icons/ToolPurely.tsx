// This icon file is generated automatically.
import * as React from 'react';
import ToolPurelySvg from '@sensoro-design/icons-svg/es/asn/ToolPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ToolPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ToolPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ToolPurely);

RefIcon.displayName = 'ToolPurely';

export default RefIcon;
