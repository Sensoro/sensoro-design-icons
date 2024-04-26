// This icon file is generated automatically.
import * as React from 'react';
import WalkieTalkieOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WalkieTalkieOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WalkieTalkieOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WalkieTalkieOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WalkieTalkieOutlined);

RefIcon.displayName = 'WalkieTalkieOutlined';

export default RefIcon;
