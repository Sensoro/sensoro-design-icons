// This icon file is generated automatically.
import * as React from 'react';
import GimbalDirectionControlOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GimbalDirectionControlOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GimbalDirectionControlOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GimbalDirectionControlOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GimbalDirectionControlOutlined);

RefIcon.displayName = 'GimbalDirectionControlOutlined';

export default RefIcon;
