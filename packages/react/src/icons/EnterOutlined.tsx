// This icon file is generated automatically.
import * as React from 'react';
import EnterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EnterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EnterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EnterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EnterOutlined);

RefIcon.displayName = 'EnterOutlined';

export default RefIcon;
