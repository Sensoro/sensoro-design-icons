// This icon file is generated automatically.
import * as React from 'react';
import EngineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EngineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EngineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EngineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EngineOutlined);

RefIcon.displayName = 'EngineOutlined';

export default RefIcon;
