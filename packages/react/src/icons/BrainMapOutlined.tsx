// This icon file is generated automatically.
import * as React from 'react';
import BrainMapOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BrainMapOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BrainMapOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BrainMapOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BrainMapOutlined);

RefIcon.displayName = 'BrainMapOutlined';

export default RefIcon;
