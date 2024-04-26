// This icon file is generated automatically.
import * as React from 'react';
import OperateFilledSvg from '@sensoro-design/icons-svg/es/asn/OperateFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OperateFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OperateFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OperateFilled);

RefIcon.displayName = 'OperateFilled';

export default RefIcon;
