// This icon file is generated automatically.
import * as React from 'react';
import AppstoreAddOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AppstoreAddOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AppstoreAddOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AppstoreAddOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AppstoreAddOutlined);

RefIcon.displayName = 'AppstoreAddOutlined';

export default RefIcon;
