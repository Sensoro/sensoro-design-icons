// This icon file is generated automatically.
import * as React from 'react';
import OperateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OperateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OperateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OperateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OperateOutlined);

RefIcon.displayName = 'OperateOutlined';

export default RefIcon;
