// This icon file is generated automatically.
import * as React from 'react';
import PeersFilledSvg from '@sensoro-design/icons-svg/es/asn/PeersFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PeersFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PeersFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PeersFilled);

RefIcon.displayName = 'PeersFilled';

export default RefIcon;
