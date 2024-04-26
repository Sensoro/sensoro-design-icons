// This icon file is generated automatically.
import * as React from 'react';
import ArrowSquareStartOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowSquareStartOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowSquareStartOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowSquareStartOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowSquareStartOutlined);

RefIcon.displayName = 'ArrowSquareStartOutlined';

export default RefIcon;
