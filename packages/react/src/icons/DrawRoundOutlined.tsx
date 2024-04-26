// This icon file is generated automatically.
import * as React from 'react';
import DrawRoundOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DrawRoundOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DrawRoundOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DrawRoundOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DrawRoundOutlined);

RefIcon.displayName = 'DrawRoundOutlined';

export default RefIcon;
