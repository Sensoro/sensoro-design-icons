// This icon file is generated automatically.
import * as React from 'react';
import SquareOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SquareOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SquareOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SquareOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SquareOutlined);

RefIcon.displayName = 'SquareOutlined';

export default RefIcon;
