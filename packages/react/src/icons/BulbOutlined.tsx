// This icon file is generated automatically.
import * as React from 'react';
import BulbOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BulbOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BulbOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BulbOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BulbOutlined);

RefIcon.displayName = 'BulbOutlined';

export default RefIcon;
