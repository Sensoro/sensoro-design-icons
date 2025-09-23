// This icon file is generated automatically.
import * as React from 'react';
import LayoutRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LayoutRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LayoutRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LayoutRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LayoutRightOutlined);

RefIcon.displayName = 'LayoutRightOutlined';

export default RefIcon;
