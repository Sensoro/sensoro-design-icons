// This icon file is generated automatically.
import * as React from 'react';
import HexagonOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HexagonOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HexagonOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HexagonOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HexagonOutlined);

RefIcon.displayName = 'HexagonOutlined';

export default RefIcon;
