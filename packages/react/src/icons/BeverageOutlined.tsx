// This icon file is generated automatically.
import * as React from 'react';
import BeverageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BeverageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BeverageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BeverageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BeverageOutlined);

RefIcon.displayName = 'BeverageOutlined';

export default RefIcon;
