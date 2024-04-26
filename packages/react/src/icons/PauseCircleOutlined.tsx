// This icon file is generated automatically.
import * as React from 'react';
import PauseCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PauseCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PauseCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PauseCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PauseCircleOutlined);

RefIcon.displayName = 'PauseCircleOutlined';

export default RefIcon;
