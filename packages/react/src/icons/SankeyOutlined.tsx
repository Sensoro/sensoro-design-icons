// This icon file is generated automatically.
import * as React from 'react';
import SankeyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SankeyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SankeyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SankeyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SankeyOutlined);

RefIcon.displayName = 'SankeyOutlined';

export default RefIcon;
