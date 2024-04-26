// This icon file is generated automatically.
import * as React from 'react';
import CameraFlipFilledSvg from '@sensoro-design/icons-svg/es/asn/CameraFlipFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CameraFlipFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CameraFlipFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CameraFlipFilled);

RefIcon.displayName = 'CameraFlipFilled';

export default RefIcon;
