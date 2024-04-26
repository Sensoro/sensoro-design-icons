// This icon file is generated automatically.
import * as React from 'react';
import DormancyCancelOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DormancyCancelOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DormancyCancelOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DormancyCancelOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DormancyCancelOutlined);

RefIcon.displayName = 'DormancyCancelOutlined';

export default RefIcon;
