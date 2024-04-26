// This icon file is generated automatically.
import * as React from 'react';
import CloseSquareOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CloseSquareOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloseSquareOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloseSquareOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloseSquareOutlined);

RefIcon.displayName = 'CloseSquareOutlined';

export default RefIcon;
