// This icon file is generated automatically.
import * as React from 'react';
import AlignRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlignRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlignRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlignRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlignRightOutlined);

RefIcon.displayName = 'AlignRightOutlined';

export default RefIcon;
