// This icon file is generated automatically.
import * as React from 'react';
import AlgorithmOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlgorithmOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlgorithmOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlgorithmOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlgorithmOutlined);

RefIcon.displayName = 'AlgorithmOutlined';

export default RefIcon;
