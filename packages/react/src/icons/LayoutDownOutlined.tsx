// This icon file is generated automatically.
import * as React from 'react';
import LayoutDownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LayoutDownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LayoutDownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LayoutDownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LayoutDownOutlined);

RefIcon.displayName = 'LayoutDownOutlined';

export default RefIcon;
