// This icon file is generated automatically.
import * as React from 'react';
import CheckSquareOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CheckSquareOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CheckSquareOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CheckSquareOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CheckSquareOutlined);

RefIcon.displayName = 'CheckSquareOutlined';

export default RefIcon;
