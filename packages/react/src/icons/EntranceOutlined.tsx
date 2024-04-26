// This icon file is generated automatically.
import * as React from 'react';
import EntranceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EntranceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EntranceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EntranceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EntranceOutlined);

RefIcon.displayName = 'EntranceOutlined';

export default RefIcon;
