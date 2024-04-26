// This icon file is generated automatically.
import * as React from 'react';
import CropOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CropOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CropOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CropOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CropOutlined);

RefIcon.displayName = 'CropOutlined';

export default RefIcon;
