// This icon file is generated automatically.
import * as React from 'react';
import RulerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RulerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RulerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RulerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RulerOutlined);

RefIcon.displayName = 'RulerOutlined';

export default RefIcon;
