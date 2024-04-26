// This icon file is generated automatically.
import * as React from 'react';
import ExitOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ExitOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ExitOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ExitOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ExitOutlined);

RefIcon.displayName = 'ExitOutlined';

export default RefIcon;
