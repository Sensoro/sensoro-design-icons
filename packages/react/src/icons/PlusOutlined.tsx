// This icon file is generated automatically.
import * as React from 'react';
import PlusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlusOutlined);

RefIcon.displayName = 'PlusOutlined';

export default RefIcon;
