// This icon file is generated automatically.
import * as React from 'react';
import TurnRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TurnRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TurnRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TurnRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TurnRightOutlined);

RefIcon.displayName = 'TurnRightOutlined';

export default RefIcon;
