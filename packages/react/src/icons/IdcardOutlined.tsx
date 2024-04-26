// This icon file is generated automatically.
import * as React from 'react';
import IdcardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IdcardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IdcardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IdcardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IdcardOutlined);

RefIcon.displayName = 'IdcardOutlined';

export default RefIcon;
