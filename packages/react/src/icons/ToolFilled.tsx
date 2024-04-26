// This icon file is generated automatically.
import * as React from 'react';
import ToolFilledSvg from '@sensoro-design/icons-svg/es/asn/ToolFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ToolFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ToolFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ToolFilled);

RefIcon.displayName = 'ToolFilled';

export default RefIcon;
