// This icon file is generated automatically.
import * as React from 'react';
import DragOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DragOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DragOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DragOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DragOutlined);

RefIcon.displayName = 'DragOutlined';

export default RefIcon;
