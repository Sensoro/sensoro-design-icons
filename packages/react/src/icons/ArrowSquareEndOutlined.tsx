// This icon file is generated automatically.
import * as React from 'react';
import ArrowSquareEndOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ArrowSquareEndOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ArrowSquareEndOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ArrowSquareEndOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ArrowSquareEndOutlined);

RefIcon.displayName = 'ArrowSquareEndOutlined';

export default RefIcon;
