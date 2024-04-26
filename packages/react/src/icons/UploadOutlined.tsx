// This icon file is generated automatically.
import * as React from 'react';
import UploadOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UploadOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UploadOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UploadOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UploadOutlined);

RefIcon.displayName = 'UploadOutlined';

export default RefIcon;
