// This icon file is generated automatically.
import * as React from 'react';
import PlusCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlusCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlusCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlusCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlusCircleOutlined);

RefIcon.displayName = 'PlusCircleOutlined';

export default RefIcon;
