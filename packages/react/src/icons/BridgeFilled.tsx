// This icon file is generated automatically.
import * as React from 'react';
import BridgeFilledSvg from '@sensoro-design/icons-svg/es/asn/BridgeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BridgeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BridgeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BridgeFilled);

RefIcon.displayName = 'BridgeFilled';

export default RefIcon;
