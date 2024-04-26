// This icon file is generated automatically.
import * as React from 'react';
import MinusSquareOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MinusSquareOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinusSquareOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinusSquareOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinusSquareOutlined);

RefIcon.displayName = 'MinusSquareOutlined';

export default RefIcon;
