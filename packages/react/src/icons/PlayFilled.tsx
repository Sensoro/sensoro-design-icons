// This icon file is generated automatically.
import * as React from 'react';
import PlayFilledSvg from '@sensoro-design/icons-svg/es/asn/PlayFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlayFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlayFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlayFilled);

RefIcon.displayName = 'PlayFilled';

export default RefIcon;
