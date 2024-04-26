// This icon file is generated automatically.
import * as React from 'react';
import AppstoreOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AppstoreOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AppstoreOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AppstoreOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AppstoreOutlined);

RefIcon.displayName = 'AppstoreOutlined';

export default RefIcon;
