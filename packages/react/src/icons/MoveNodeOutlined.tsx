// This icon file is generated automatically.
import * as React from 'react';
import MoveNodeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MoveNodeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MoveNodeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MoveNodeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MoveNodeOutlined);

RefIcon.displayName = 'MoveNodeOutlined';

export default RefIcon;
