// This icon file is generated automatically.
import * as React from 'react';
import CloseSquareFilledSvg from '@sensoro-design/icons-svg/es/asn/CloseSquareFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloseSquareFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloseSquareFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloseSquareFilled);

RefIcon.displayName = 'CloseSquareFilled';

export default RefIcon;
