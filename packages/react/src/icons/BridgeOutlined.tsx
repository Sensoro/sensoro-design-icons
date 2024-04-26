// This icon file is generated automatically.
import * as React from 'react';
import BridgeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BridgeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BridgeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BridgeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BridgeOutlined);

RefIcon.displayName = 'BridgeOutlined';

export default RefIcon;
