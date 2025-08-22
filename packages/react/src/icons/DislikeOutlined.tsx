// This icon file is generated automatically.
import * as React from 'react';
import DislikeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DislikeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DislikeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DislikeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DislikeOutlined);

RefIcon.displayName = 'DislikeOutlined';

export default RefIcon;
