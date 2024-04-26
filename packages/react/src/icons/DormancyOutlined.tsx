// This icon file is generated automatically.
import * as React from 'react';
import DormancyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DormancyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DormancyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DormancyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DormancyOutlined);

RefIcon.displayName = 'DormancyOutlined';

export default RefIcon;
